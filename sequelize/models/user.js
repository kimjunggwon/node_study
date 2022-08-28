const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
//User Model을 만들고 모듈로 exports
//User Model은 Sequelize.Model을 확장한 클래스로 선언
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        },{
            sequelize,
            //static init 메서드의 매개변수와 연결되는 옵션
            //db.sequelize 객체를 넣어야함
            timestamps: false,
            //true : createAt(데이터 입력 날짜와 시간)과 updateAt(데이터 수정 날짜와 시간)으로 자동이 입력
            //false : 위의 테이블 컬럼 중 created_at에서 직접 추가를 하여서 기능을 해제
            underscored: false,
            //Sequlize는 기본적으로 캐멜 케이스(createAt) 형태이지만, 캐멀 케이스를 스네이크 케이스(create_at)로 바꾸는 옵션
            modelName: 'User',
            //Node에서 사용될 모델 이름
            tableName: 'users',
            //실제 데이터 베이스에 사용되는 테이블명
            paranoid: false,
            //true : deleteAt라는 컬럼이 생겨 데이터를 완전히 지우지 않고 지운 시각에 대해서 기록
            charset: 'utf8',
            collate: 'utf8_general_ci',
            //한글 사용을 위한 설정
        });
    }
    static associate(db){
        db.User.hasMany(db.Comment, { foreginKey: 'commenter', sourceKey: 'id' });
    }
};
//init() : 테이블에 대한 설정
// - super.init(): 첫 번째 인수는 테이블 컬럼에 대한 설정
//                 두 번째 인수는 테이블 자체에 대한 설정
//associate() : 다른 모델과의 관계
