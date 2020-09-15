const router = require('express').Router();
const moviesCtrl = require('../controllers/movies')

// Public Routes

// Protected Routes
router.use(require('../config/auth'));


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;