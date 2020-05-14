const express = require('express');
const router = express.Router();
const { errorHandler } = require('../middlewares');
const { getPosts, newPost, createPost, showPost, editPost 
} = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', errorHandler(getPosts));


router.get('/new', newPost);

router.post('/', errorHandler(createPost));


router.get('/:id', errorHandler(showPost));


router.get('/:id/edit', errorHandler(editPost));


router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id')
});


router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
});
  
  module.exports = router;