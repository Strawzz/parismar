// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { searchByName, getCommentsByMarketName } from './CallAPI'; 
// import Header from './Header';
// import Comment from './Comment';

// const MarketPage = () => {
//     const { marketName } = useParams();
//     const [marketDetails, setMarketDetails] = useState(null);
//     const [comments, setComments] = useState([]);
    


//     useEffect(() => {
//         async function fetchData() {
//             const details = await searchByName(marketName);
//             setMarketDetails(details);

//             const commentsData = await getCommentsByMarketName(marketName);
//             setComments(commentsData);
//         }
//         fetchData();
//     }, [marketName]);

//     const handleCommentsUpdate = async () => {
//         // Fetch updated comments after a new comment is added
//         const updatedComments = await getCommentsByMarketName(marketName);
//         setComments(updatedComments);
//     };
    

//     if (!marketDetails) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <Header />
//             <h2>{marketDetails.name}</h2>
//             <p>Category: {marketDetails.category}</p>
//             <p>Paris Quarter: {marketDetails.parisQuarter}</p>
            
//             <Comment comments={comments} onCommentsUpdate={handleCommentsUpdate} marketName={marketDetails.name} userId={localStorage.getItem('userId')} loginId={localStorage.getItem('loginId')} />
//         </div>
//     );
// };

// export default MarketPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchByName, getCommentsByMarketName, deleteComment, editComment } from './CallAPI'; 
import Header from './Header';
import Comment from './Comment';

const MarketPage = () => {
    const { marketName } = useParams();
    const [marketDetails, setMarketDetails] = useState(null);
    const [comments, setComments] = useState([]);
    const [editedComment, setEditedComment] = useState({ commentId: null, content: '' });
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
  

    useEffect(() => {
        async function fetchData() {
            const details = await searchByName(marketName);
            setMarketDetails(details);

            const commentsData = await getCommentsByMarketName(marketName);
            setComments(commentsData);
        }
        fetchData();
    }, [marketName]);

    const handleCommentsUpdate = async () => {
        // Fetch updated comments after a new comment is added
        const updatedComments = await getCommentsByMarketName(marketName);
        setComments(updatedComments);
    };
    
    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(commentId);
            
            const updatedComments = await getCommentsByMarketName(marketName);
            setComments(updatedComments);
        } catch (error) {
            console.error('Error deleting comment:', error.message);
        }
    };

    // const handleEditComment = async(comment) => {
    //     try{
    //         await editComment(comment);

    //         const updatedComments = await getCommentsByMarketName(marketName);
    //         setComments(updatedComments);
    //     }
    //     catch(error){
    //         console.error('Error editing comment:', error.message);
    //     }
    // }

    const handleEditComment = async (editedContent, commentId) => {
        try {
            // Get userId and loginId from localStorage
            const userId = localStorage.getItem('userId');
            const loginId = localStorage.getItem('loginId');

            if (!userId || !loginId) {
                console.error('User is not logged in');
                return;
            }
            // Create the complete comment object
            const updatedComment = {
                userId: userId,
                loginId: loginId,
                marketName: marketName,
                commentId: editedContent.commentId,
                content: editedContent.content,
            };
    
            // Call the editComment API function with the complete comment object
            await editComment(updatedComment);
            setEditedComment({ commentId: null, content: '' });

            // Update the comments after the edit
            const updatedComments = await getCommentsByMarketName(marketName);
            setComments(updatedComments);
        } catch (error) {
            console.error('Error editing comment:', error.message);
        }
    };
    



    const renderEditForm = () => {
        if (!editedComment.commentId) {
            return null;
        }

        return (
            <div>
                <input
                    type="text"
                    value={editedComment.content}
                    onChange={(e) => setEditedComment({ ...editedComment, content: e.target.value })}
                />
                <button onClick={() => handleEditComment(editedComment)}>Submit</button>
            </div>
        );
    };
    
    const handleLikeClick = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            } else {
            setLikes(likes - 1);
            setLiked(false);
            }
    };

    if (!marketDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header showAboutLink={true} showLoginLink={true}/>
            <h2>{marketDetails.name}</h2>
            <button onClick={handleLikeClick}>
                <span role="img" aria-label="Heart">
                    {liked ? '❤️' : '🤍'}
                </span>
            </button>
            <span>{likes} likes</span>
            <p>Category: {marketDetails.category}</p>
            <p>Paris Quarter: {marketDetails.parisQuarter}</p>
            <div>
                <iframe
                src="https://opendata.paris.fr/explore/embed/dataset/marches-decouverts/map/?disjunctive.produit&disjunctive.ardt&disjunctive.jours_tenue&disjunctive.gestionnaire&basemap=jawg.dark&location=11,48.8014,2.4012&static=false&datasetcard=false&scrollWheelZoom=false"
                width="50%"  
                height="50%" 
                title="Market Map"
                ></iframe>
            </div>

            <div className="comment-section">
                <h4>Comments</h4>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p>@{comment.loginId}</p>
                            <p>{comment.content}</p>
                            <button>Like</button>
                            {comment.loginId === localStorage.getItem('loginId') && (
                                <div>
                                    <button onClick={() => handleDeleteComment(comment.commentId)}>Delete</button>
                                    <button onClick={() => setEditedComment({ commentId: comment.commentId, content: comment.content })}>Edit</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            
            {renderEditForm()}
            <Comment comments={comments} onCommentsUpdate={handleCommentsUpdate} marketName={marketDetails.name} userId={localStorage.getItem('userId')} loginId={localStorage.getItem('loginId')} />
        </div>
    );
};

export default MarketPage;