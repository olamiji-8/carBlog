// blogController.js
const blogData = require('../config/blog');
const blogPost = require("../config/blogPost");
const categoryPost = require("../config/category");

const getAllPosts = (req, res) => {
    res.json(blogData);
};

const getPostByUuid = (req, res) => {
    const postUuid = req.params.uuid;
    const post = blogData.find(post => post.id === postUuid);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
};

const getAllBlogPosts = (req, res) => {
    res.json(blogPost);
};

const getBlogPostByUuid = (req, res) => {
    const postUuid = req.params.uuid;
    const post = blogPost.find(post => post.id === postUuid);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
};

const category = (req, res) => {
    res.json(categoryPost);
};

module.exports = {
    getAllPosts,
    getPostByUuid,
    getAllBlogPosts,
    getBlogPostByUuid,
    category
};
