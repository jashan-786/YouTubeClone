import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  method: 'GET',
  
  params: {
    
    
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'e9fc4883e8msh9f036bbc1e13f3fp1deb1ejsnc01c56a106d2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.request(`${BASE_URL}/${url}`, options);
console.log(data)
  return data;
};