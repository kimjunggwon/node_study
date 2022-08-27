const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;
//db라는 객체에 User와 Comment 모델을 담음

User.init(sequelize);
Comment.init(sequelize);
//User.init과 Comment.init은 각각의 모델의 static.init 메서드를 호출

User.associate(db);
Comment.associate(db);
//다른 테이블과의 관계를 연결

module.exports = db;