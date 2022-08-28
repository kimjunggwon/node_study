const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        const users = await User.findAll();
        res.render('sequelize', { users });
    }catch(err){
        console.error(err);
        next(err);
    }
});
//GET /으로 접속을 하게 되면 User.findAll 메서드로 사용자를 모두 조회 후
//sequelize.html을 렌더링을할 때 users 결과값을 출력
module.exports = router;