const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        const comment = await Comment.create({
            commenter: req.body.id,
            comment: req.body.comment,
        });
        console.log(comment);
        res.status(201).json(comment);
    }catch(err){
        console.error(err);
        next(err);
    }
});
//POST /comments 댓글 생성하는 라우터
//commenter 속성에는 사용자 id 입력
router.route('/:id').patch(async (req, res, next) => {
    try{
        const result = await Comment.update({
            comment: req.body.comment,
        },{
            where: {
                id: req.params.id
            },
        });
        res.json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
// PATCH /comments/:id 댓글을 수정하는 라우터
}).delete(async (req, res, next) => {
    try{
        const result = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});
//DELETE /comments/:id 댓글을 삭제하는 라우터

module.exports = router;