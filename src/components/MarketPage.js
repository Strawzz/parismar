
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
    
    const handleDirectionsClick = () => {
        // Get the market's address
        const marketAddress = encodeURIComponent(marketDetails.address);

        // Create a Google Maps URL with the address as the search query
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${marketAddress}`;

        // Open the URL in a new tab/window
        window.open(mapsUrl, '_blank');
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

            <div className='marketPage-header'>
                <Header showAboutLink={true} showLoginLink={true}/>
            </div>

            <div className='marketP-content-container'>
                
                <div className="left-container">

                        <div className='market-container'>
                                <div className='market-title'>
                                    <h1>{marketDetails.name}</h1>
                                    <button onClick={handleLikeClick} className='like-button'>
                                        <span role="img" aria-label="Heart">
                                            {liked ? '❤️' : '🤍'}
                                        </span>
                                    </button>
                                </div>
                                <div className='marketDetails-content'>
                                    <p className='p1'><strong>Category: </strong> {marketDetails.category}</p>
                                    <p className='p2'><strong>Arrondissement: </strong>{marketDetails.parisQuarter}</p>
                                    <p className='p3'><strong>Hours: </strong>{marketDetails.hours}</p>
                                    <p className='p4'><strong>Address: </strong>{marketDetails.address}</p>
                                </div>
                                <div className='directions-button'>
                                    <button onClick={handleDirectionsClick}>Directions</button>
                                </div>
                        </div>

                        <div className="comment-section">
                            <div className="section-divider"></div>
                            <div className='comment-title'>
                                <h4>Comments:</h4>
                            </div>
                            <div className='write-comment-comtainer'>
                                {renderEditForm()}
                                <Comment comments={comments} onCommentsUpdate={handleCommentsUpdate} marketName={marketDetails.name} userId={localStorage.getItem('userId')} loginId={localStorage.getItem('loginId')} />
                            </div>
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
                
                <div className='right-section'>
                                
                                <div className='map'>
                                        <iframe
                                        src="https://opendata.paris.fr/explore/embed/dataset/marches-decouverts/map/?disjunctive.produit&disjunctive.ardt&disjunctive.jours_tenue&disjunctive.gestionnaire&basemap=jawg.dark&location=11,48.8014,2.4012&static=false&datasetcard=false&scrollWheelZoom=false"
                                        width="120%"  
                                        height="100%" 
                                        title="Market Map"
                                        ></iframe>
                                </div>
                    
                </div> 


            </div>
            
        </div>
    );

};

export default MarketPage;