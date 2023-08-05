export default async function isAdmin(req, res, next) {
    try {
      const user = req.session.user; // Access the user from the session (adjust as per your authentication setup)
      if (!user || !user.isAdmin) {
        return res.status(403).json({ error: 'Unauthorized' });
      }
      next(); // Continue with the API call if user has admin privileges
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  