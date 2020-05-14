const Post = require('../models/post');

module.exports = {
    //POSTS INDEX
    async getPosts(req, res, next) {
        let posts = await Post.find({});
        res.render('posts/index', { posts });
    },
    //POSTS NEW
    newPost(req, res, next){
        res.render('posts/new');
    }
}