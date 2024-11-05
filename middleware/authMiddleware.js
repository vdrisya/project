const jwt = require('jsonwebtoken');

// Middleware to verify JWT token for all users
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add decoded token payload to request object
    next();
  } catch (ex) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// Middleware to verify if the user is a Mentor
const isMentor = (req, res, next) => {
  if (req.user.role !== 'mentor') {
    return res.status(403).json({ message: 'Access denied. Mentor role required.' });
  }
  next();
};

// Middleware to verify if the user is an Admin
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
  next();
};

// Middleware to verify if the user is a Student
const isStudent = (req, res, next) => {
  if (req.user.role !== 'student') {
    return res.status(403).json({ message: 'Access denied. Student role required.' });
  }
  next();
};

module.exports = {
  verifyToken,
  isMentor,
  isAdmin,
  isStudent
};
