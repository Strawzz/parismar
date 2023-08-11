
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchByName, getCommentsByMarketName, deleteComment, editComment } from './CallAPI'; 
import Header from './Header';
import Comment from './Comment';
import '../styles/marketPage.css';

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
        <div className='marketPage-container'>

            <div className='header'>
                <Header showAboutLink={true} showLoginLink={true}/>
            </div>

            <div className='content-container'>

                    <div className='market-container'>
                            <div className='market-details'>
                                <h1>{marketDetails.name}</h1>
                                <button onClick={handleLikeClick}>
                                    <span role="img" aria-label="Heart">
                                        {liked ? '❤️' : '🤍'}
                                    </span>
                                </button>
        
                                <p>Category: {marketDetails.category}</p>
                                <p>Paris Quarter: {marketDetails.parisQuarter}</p>
                                <p>Hours: {marketDetails.hours}</p>
                            </div>
                    

                            <div className='map'>
                                <iframe
                                src="https://opendata.paris.fr/explore/embed/dataset/marches-decouverts/map/?disjunctive.produit&disjunctive.ardt&disjunctive.jours_tenue&disjunctive.gestionnaire&basemap=jawg.dark&location=11,48.8014,2.4012&static=false&datasetcard=false&scrollWheelZoom=false"
                                width="100%"  
                                height="60%" 
                                title="Market Map"
                                ></iframe>
                            </div>
                    </div>
                    <div className="comment-section">
                        <h4>Comments</h4>
                        <ul>
                            {comments.map((comment, index) => (
                                <li className="comment" key={index}>
                                    <p className="comment-login">@{comment.loginId}</p>
                                    <p className="comment-text">{comment.content}</p>
                                    {comment.loginId === localStorage.getItem('loginId') && (
                                        <div className='comment-actions'>
                                            <button onClick={() => handleDeleteComment(comment.commentId)}>Delete</button>
                                            <button onClick={() => setEditedComment({ commentId: comment.commentId, content: comment.content })}>Edit</button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
            <div className='write-comment-comtainer'>
                {renderEditForm()}
                <Comment comments={comments} onCommentsUpdate={handleCommentsUpdate} marketName={marketDetails.name} userId={localStorage.getItem('userId')} loginId={localStorage.getItem('loginId')} />
            </div>
        </div>
    );
};

export default MarketPage;