import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchByName, getCommentsByMarketName } from './CallAPI'; 
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
    

    if (!marketDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <h2>{marketDetails.name}</h2>
            <p>Category: {marketDetails.category}</p>
            <p>Paris Quarter: {marketDetails.parisQuarter}</p>
            
            <Comment comments={comments} onCommentsUpdate={handleCommentsUpdate} marketName={marketDetails.name}  />
        </div>
    );
};

export default MarketPage;

