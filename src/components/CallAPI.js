import axios from 'axios';

export const getAllMarkets = async () => {
    try {
        console.log("now it is calling all markets")
        const response = await axios.get(`http://localhost:8080/api/markets/all`);
        const marketData = response.data;
        // setMarkets([marketData]);
        return marketData;
    } catch (error) {
        console.error('Error fetching markets:', error.message);
    }
};

export const searchMarket = async (searchOption, searchValue) => {
    try {
        
        const response = await axios.get(`http://localhost:8080/api/markets/all`, {
            params: {
                [searchOption]: searchValue, 
            },
        });
        const marketData = response.data;
        return marketData
    } catch (error) {
        console.error('Error fetching markets:', error.message);
    }
};




export const searchByName = async(searchValue) => {
    try {
        console.log(`${encodeURIComponent(searchValue)}`);
        const response = await axios.get(`http://localhost:8080/api/markets/${encodeURIComponent(searchValue)}`);
        const marketData = response.data;
        return marketData
    } catch (error){
        console.error('Error fetching markets:', error.message);
    }
}