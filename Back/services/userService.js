const User = require("../models/User");
const jwt = require('jsonwebtoken');
 async function getUser(userId) {
      try {
        return await User.findById(userId);
      } catch (error) {
        return { error: 'No User Found' };
      }
  }


async function createUser(username, email, password) {
    let existingUser = await User.findOne({ username });
      if (existingUser) {
        throw { error: 'Another user exists with the same username.'};
      }
  
      existingUser = await User.findOne({ email });
      if (existingUser) {
        throw {error: 'Another user exists with the same email.'};
      }
    
      const user = new User({ username, email, password });
  
      return await user.save();
  };


  async function loginUser(username, password){
    try {
     const user = await User.findOne({ username });
      if (!user) {
        throw {error: 'User does not exist.'};
      }
  
      if (user.password !== password) {
        throw {error: 'Invalid username or password.'};
      }
  
      const token = jwt.sign({ userId: user._id }, 'Ananya');
      return { user, token };
    } catch (error) {
         return {error: 'Internal server error.'};
        }
  };
module.exports = {  getUser,
                    createUser,
                    loginUser };