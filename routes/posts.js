const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middlewares');
const { getPosts } = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', errorHandler(getPosts));


router.get('/new', (req, res, next) => {
    res.send('INDEX /posts/new')
});

router.post('/', (req, res, next) => {
    res.send('CREATE /posts')
});


router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id')
});


router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit')
});


router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id')
});


router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
});
  
  module.exports = router;