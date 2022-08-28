const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.route('/').get(async (req, res, next) => {
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(err){
        console.error(err);
        next(err);
    }
//GET /users 에서 User.findAll 메서드로 모두 조회 후,
//결과 값을 json형태로 반환
}).post(async (req, res, next) => {
    try{
        const user = await User.create({
            name: req.body.name,
            age: req.body.age,
            married: req.body.married,
        });
        console.log(user);
        res.status(201).json(user);
    }catch(err){
        console.error(err);
        next(err);
    }
//POST /users에서는 User.create 메서드로 데이터를 입력
//json 반환 결과값은 201
});

router.get('/:id/comments', async (req, res, next) => {
    try{
        const comments = await Comment.findAll({
            include: {
                model: User,
                where: {
                    id: req.params.id
                },
            },
        });
        console.log(comments);
        res.json(comments);
    }catch(err){
        console.error(err);
        next(err);
    }
});
//GET /:id/comments에서는 댓글을 모두 조회는 하지만
//User 모델을 참조하여 해당 id에 맞는 데이터를 조회

module.exports = router;