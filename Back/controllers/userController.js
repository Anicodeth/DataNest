
async function getUserById (req, res)  {
    try {
      const userId = req.params.id;
      const user = await getUser(userId);
      
      if (user.error) {
        return res.status(404).json({ error: user.error });
      }
      
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }


module.exports = { getUserById };