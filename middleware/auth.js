// const jwt = require('jsonwebtoken');

// const auth = async (req, res, next) => {
//   try {
//     // Get the token from the request header
//     const token = req.header('x-auth-token');
//     if (!token) {
//       return res.status(401).json({ msg: 'No auth token, access denied' });
//     }

//     // Verify the token
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verified) {
//       return res.status(401).json({ msg: 'Token verification failed, authorization denied' });
//     }a

//     // If verified, add the user's ID from the token to the request object
//     req.user = verified.id;
//     next(); // Proceed to the next middleware/route handler
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = auth;
