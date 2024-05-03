const blogData = require('../config/blog');

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

module.exports = {
    getAllPosts,
    getPostByUuid
};
