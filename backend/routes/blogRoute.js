const  Router  = require("express");
const blogController = require("../controllers/blogController");
const router = Router();


router.get('/posts', blogController.getAllPosts);
router.get('/posts/:uuid', blogController.getPostByUuid);
router.get('/blog', blogController.getAllBlogPosts);
router.get('/blog/:uuid', blogController.getBlogPostByUuid);
router.get('/category', blogController.category);


module.exports = router;