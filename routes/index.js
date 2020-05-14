const express = require('express');
const router = express.Router();
const {postRegister, postLogin, getLogout} = require('../controllers'); 
const {asyncErrorHandler} = require('../middlewares'); 

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});


router.get('/register', (req, res, next) => {
  res.send('GET /register');
});


router.post('/register', asyncErrorHandler(postRegister));


router.get('/login', (req, res, next) => {
  res.send('GET /login');
});


router.post('/login', postLogin);


router.get('/logout', getLogout);


router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});


router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});


router.get('/forgot-pw', (req, res, next) => {
  res.send('GET /forgot-pw');
});


router.put('/forgot-pw', (req, res, next) => {
  res.send('PUT /forgot-pw');
});


router.get('/reset-pw/:token', (req, res, next) => {
  res.send('GET /reset-pw/:token');
});


router.put('/reset-pw/:token', (req, res, next) => {
  res.send('PUT /reset-pw/:token');
});

module.exports = router;
