const express = require('express');
const router = express.Router();
const {postRegister} = require('../controllers/index') 

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});


router.get('/register', (req, res, next) => {
  res.send('GET /register');
});


router.post('/register', postRegister);


router.get('/login', (req, res, next) => {
  res.send('GET /login');
});


router.post('/login', (req, res, next) => {
  res.send('POST /login');
});


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
