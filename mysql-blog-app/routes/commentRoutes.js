const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/', (req, res) => { 
    commentController.getComments(res);
})

router.post('/create',(req,res) => { 
    commentController.createComment(req.body, res);
})

router.put('/:id', (req, res) => {
    commentController.updateComment(req, res);
})

router.delete('/:id', (req, res) => {
    commentController.deleteComment(req, res);
})

router.get('/post/:pid/comments', (req, res) => {
    postController.getUserPosts(req, res);
})

module.exports = router;