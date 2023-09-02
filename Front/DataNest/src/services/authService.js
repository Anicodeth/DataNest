import axios from 'axios';

const api = "https://data-nest.vercel.app";
const version = "v1";

export const getUserFromLocalStorage = () => {
    return localStorage.getItem('user');
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('authToken');
};

export const register = async  (credentials) => {
    return await axios.post(`${api}/api/${version}/user/signup`, credentials)
    .then((response) => {  
      const { newUser } = response.data;
      return { newUser };
    }).
    catch((error) => {
      console.log(error);
      throw new Error("SignUp Failed");
    })
}

export const logIn = async (credentials) => {
  return await axios.post(`${api}/api/${version}/user/login`, credentials)
  .then((response) => {
    const { user, token } = response.data;
    localStorage.setItem('user', user);
    localStorage.setItem('authToken', token);
    return { user };
  }).catch((error) => {
    if (error.response && error.response.status === 401) {
      throw new Error("Invalid username or password. Please try again.");
    } else {
      console.error(error);
      throw new Error("Authentication Failed.");
    }
  })
};

export const logout = () => {
    // Clear the JWT token from local storage
    localStorage.removeItem('authToken');

    // Set user authentication status to not authenticated.
};

