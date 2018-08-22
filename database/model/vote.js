import Sequelize from 'sequelize';

const vote = {
  qus: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ans1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ans2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  option3: {
    type: Sequelize.STRING,
    allowNull: true
  }
};


export default vote;
