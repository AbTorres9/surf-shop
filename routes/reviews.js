const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews')
});


router.post('/', (req, res, next) => {
    res.send('CREATE /reviews')
});



router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /reviews/review_id/edit')
});


router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /reviews/review_id')
});


router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /reviews/review_id')
});
  
  module.exports = router;