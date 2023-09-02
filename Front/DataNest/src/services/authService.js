
import axios from 'axios';

const api = "http://localhost:4000";
const version = "v1";

const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('authToken', token);
};

const getTokenFromLocalStorage = () => {
    return localStorage.getItem('authToken');
};



export const signup = async  (credentials) => {
    try{
        // credential = { username, email, password }

        const response  = await axios.post(`${api}/api/${version}/user/signup`,
            {
                body : credentials
            }
            );
        const { newUser } = response.data;
        return {"newUser" : newUser };


    }catch (error) {
        // Handle login error (e.g., display an error message).
        throw Error("SignUp Failed");
    }
}

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${api}/api/${version}/user/login`, credentials);
        const { user, token } = response.data;
        saveTokenToLocalStorage(token);


        return {"user": user};

    } catch (error) {
        // Handle login error (e.g., display an error message).
        throw Error("Authentication Failed");
    }
};

export const logout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem('authToken');

    // Set user authentication status to not authenticated.
};





