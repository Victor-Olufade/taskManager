import axios from 'axios';


const baseUrl = process.env.REACT_APP_BASEURLUSERS as string;

export const apiGet = async (path: string) => {
    const signature = localStorage.getItem("signature");
    const config = {
        headers: {
            Authorization: `Bearer ${signature}`
        }
    }
    const response = await axios.get(`${baseUrl}${path}`, config);
    return response;
}

export const apiPost = async (path: string, body: object) => {
    const signature = localStorage.getItem("signature");
    const config = {
        headers: {
            Authorization: `Bearer ${signature}`
        }
    };
    const response = await axios.post(`${baseUrl}${path}`, body, config);
    return response;
}