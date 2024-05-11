const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', (req, res) => { 
    postController.getPosts(res);
})

router.post('/create',(req,res) => { 
    postController.createPost(req.body, res);
})

router.put('/:id', (req, res) => {
    postController.updatePost(req, res);
})

router.delete('/:id', (req, res) => {
    postController.deletePost(req, res);
})

router.get('/user/:uid', (req, res) => {
    postController.getUserPosts(req, res);
})

module.exports = router;