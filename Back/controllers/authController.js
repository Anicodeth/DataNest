const auth = require('../services/userService');

async function signUp(req, res) {
    
    try {
      const { username, email, password } = req.body;
      const newUser = await auth.createUser(username, email, password);

      return res.status(201).json({ newUser });
    } catch (error) {
      if (error.name === 'BadRequestError') {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }


async function login(req, res) {
    
    try {
      const { username, password } = req.body;
      const loginResult = await auth.loginUser(username, password);
      if (loginResult.error) {
        return res.status(401).json({ error: loginResult.error });
      }
      
      return res.json(loginResult);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }

module.exports = { signUp, login };