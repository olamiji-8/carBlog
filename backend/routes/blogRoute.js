const  Router  = require("express");
const blogController = require("../controllers/blogController");
const router = Router();


router.get('/posts', blogController.getAllPosts);
router.get('/posts/:uuid', blogController.getPostByUuid);


module.exports = router;