import axios from 'axios';

export const getAllMarkets = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/api/markets/all`);
        const marketData = response.data;
        // setMarkets([marketData]);
        return marketData;
    } catch (error) {
        console.error('Error fetching markets:', error.message);
    }
};
// export const searchMarket = async(searchOption, searchValue, setMarkets) => {
//     try{
//         let encodedValue = searchValue;
//         if(searchOption === 'name'){
//             encodedValue = encodeURIComponent(searchValue);
//         }
//     const response = await axios.get(`http://localhost:8080/api/markets/all`, {
//         params: {
//         [searchOption]: encodedValue,
//         },
//     });
//     const marketData = response.data;
//         setMarkets(marketData);
//     } catch (error) {
//         console.error('Error fetching markets:', error.message);
//     }
// };
export const searchMarket = async (searchOption, searchValue, setMarkets) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/markets/all`, {
            params: {
                [searchOption]: searchValue, // Use searchValue directly
            },
        });
        const marketData = response.data;
        setMarkets(marketData);
    } catch (error) {
        console.error('Error fetching markets:', error.message);
    }
};