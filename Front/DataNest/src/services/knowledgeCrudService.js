// src/service/knowledgeService.js

import axios from 'axios';
import config from './config';

const api = config.apiEndpoint;
const version = config.version;

// Function to create new knowledge entry
export const createKnowledge = async (knowledgeData) => {
    try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        if (!token) {
            throw new Error('Authentication token not found. Please log in.');
        }

        const response = await axios.post(
            `${api}/api/${version}/knowledge/add`,

            {
                body :{
                    knowledgeData
                },
                headers: {
                    Authorization: `Bearer ${token}`, // Set the Authorization header with the token
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to retrieve knowledge entries
export const getKnowledge = async () => {
    try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        if (!token) {
            throw new Error('Authentication token not found. Please log in.');
        }

        const response = await axios.get(`${api}/api/${version}/knowledge/getall`, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the token
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to update a knowledge entry
export const updateKnowledge = async (knowledgeId, updatedKnowledge) => {
    try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        if (!token) {
            throw new Error('Authentication token not found. Please log in.');
        }

        const response = await axios.put(
            `${api}/api/${version}/knowledge/${knowledgeId}`
            ,
            {
                body:{
                    updatedKnowledge
                },
                headers: {
                    Authorization: `Bearer ${token}`, // Set the Authorization header with the token
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to delete a knowledge entry
export const deleteKnowledge = async (knowledgeId) => {
    try {
        const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
        if (!token) {
            throw new Error('Authentication token not found. Please log in.');
        }

        await axios.delete(`${api}/api/${version}/knowledge/${knowledgeId}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the token
            },
        });
    } catch (error) {
        throw error;
    }
};
