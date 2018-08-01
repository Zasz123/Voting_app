import Sequelize from 'sequelize'

import model from './model';

const sequelize = new Sequelize('vote', 'root', 'cjdfhrql', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql'
});

sequelize.authenticate()

    .then(() => {
        console.log('DB연결 성공');
    }).catch((err) => {
        if(err) {
            console.log(err);
            console.log('DB연결 실패');
        }
    });

const Vote = sequelize.define('vote', model.vote);
const Score = sequelize.define('score', model.score);

Vote.hasMany(Score, {foreignKey: 'voteId'});
Score.belongsTo(Vote, {foreignKey: 'voteId'});

sequelize.sync(/*{force:true}*/);

export default sequelize;