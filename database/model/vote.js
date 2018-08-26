import Sequelize from 'sequelize';

const vote = {
  ques: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ans1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ans2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ans3: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ans4: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ans5: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ans6: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ans7: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ans8: {
    type: Sequelize.STRING,
    allowNull: true
  }
};


export default vote;
