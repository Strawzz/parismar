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
import { searchByName, getCommentsByMarketName,deleteComment } from './CallAPI'; 
import Header from './Header';
import Comment from './Comment';

const MarketPage = () => {
    const { marketName } = useParams();
    const [marketDetails, setMarketDetails] = useState(null);
    const [comments, setComments] = useState([]);
    


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
            // Fetch updated comments after deleting the comment
            const updatedComments = await getCommentsByMarketName(marketName);
            setComments(updatedComments);
        } catch (error) {
            console.error('Error deleting comment:', error.message);
        }
    };

    // const handleEditComment = async(comment) => {
    //     try{

    //     }
    // }

    if (!marketDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <h2>{marketDetails.name}</h2>
            <p>Category: {marketDetails.category}</p>
            <p>Paris Quarter: {marketDetails.parisQuarter}</p>
            
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
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>


            <Comment comments={comments} onCommentsUpdate={handleCommentsUpdate} marketName={marketDetails.name} userId={localStorage.getItem('userId')} loginId={localStorage.getItem('loginId')} />
        </div>
    );
};

export default MarketPage;