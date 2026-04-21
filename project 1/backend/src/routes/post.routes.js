const postController = require("../controllers/post.controller")
const express = require("express")
const router = express.Router()



// Create post 
router.post("/create-post",postController.CreatePost)
//  Get Creating post
router.get("/get-posts",postController.GetPost)



module.exports = router;