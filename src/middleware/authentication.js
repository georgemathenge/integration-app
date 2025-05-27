const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']; 

        if (!authHeader) {
          return res.status(401).json({ message: 'Authorization header missing' });
        }
      
        const token = authHeader.split(' ')[1];
      
        if (!token) {
          return res.status(401).json({ message: 'Token missing' });
        }

        res.authToken = token; // Store the token in the response object for later use

        next();


    } catch (e) {
        res.send({ status: 500, e: e.message })

    }
};

module.exports = authMiddleware;