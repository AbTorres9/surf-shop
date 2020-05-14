const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middlewares');
const { postIndex, postNew, postCreate, postShow, postEdit, postUpdate 
} = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', asyncErrorHandler(postIndex));


router.get('/new', postNew);


router.post('/', asyncErrorHandler(postCreate));


router.get('/:id', asyncErrorHandler(postShow));


router.get('/:id/edit', asyncErrorHandler(postEdit));


router.put('/:id', asyncErrorHandler(postUpdate));


router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
});
  
  module.exports = router;