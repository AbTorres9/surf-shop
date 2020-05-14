const Post = require('../models/post');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'abtorres9',
    api_key: '383366945475457',
    api_secret: '4jU9ccgBPUg9n0CbhMQ9difCd7w'
});

module.exports = {
    //POSTS INDEX
    async postIndex(req, res, next) {
        let posts = await Post.find({});
        res.render('posts/index', { posts });
    },
    //POSTS NEW
    postNew(req, res, next){
        res.render('posts/new');
    },

    //POSTS CREATE
    async postCreate(req, res, next) {
    req.body.post.images = [];
    for(const file of req.files)  {
        let image = await cloudinary.v2.uploader.upload(file.path);
        req.body.post.images.push({
            url: image.secure_url,
            public_id: image.public_id   
        })
    }
    let post = await Post.create(req.body.post);
    res.redirect(`/posts/${post.id}`);
    },

    //POSTS SHOW
    async postShow(req, res, next){
    let post = await Post.findById(req.params.id);
    res.render('posts/show', {post})
    },

    //POSTS EDIT
    async postEdit(req, res, next){
    let post = await Post.findById(req.params.id);
    res.render('posts/edit', { post });
    },

    //POSTS UPDATE
    async postUpdate(req, res, next) {
    let post = await Post.findByIdAndUpdate(req.params.id, req.body.post, 
        { new: true}); 
    res.redirect(`/posts/${post.id}`);
    },

    //POSTS DELETE
    async postDestroy(req, res, next){
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/posts')
    }
}