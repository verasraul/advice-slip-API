import axios from 'axios'; 



export const pickAdvice = async () => {
    const url = `https://api.adviceslip.com/advice`;
    const response = await axios.get(url); 
    return response;
}

