

import axios from 'axios';

import config from './config';

const api = config.apiEndpoint;
const version = config.version;



// Function to retrieve filtered information based on a query
export const getFilteredInformation = async (query) => {
    try {
        const token = localStorage.getItem('authToken'); // Retrieve the JWT token from local storage
        if (!token) {
            throw new Error('Authentication token not found. Please log in.');
        }

        const response = await axios.get(`${api}/api/${version}/dataNest/condensed/${query}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the token
            },
        });

        return response.data.response; // Assuming the response structure includes a 'response' property.
    } catch (error) {
        throw error;
    }
};




// Function to retrieve knowledge-based realtime information based on a query
export const getKnowledgeBasedInformation = async (query) => {
    try {
        const token = localStorage.getItem('authToken'); // Retrieve the JWT token from local storage
        if (!token) {
            throw new Error('Authentication token not found. Please log in.');
        }

        const response = await axios.get(`${api}/api/${version}/dataNest/knowledgebased/${query}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the token
            },
        });

        return response.data.response;
    } catch (error) {
        throw error;
    }
};