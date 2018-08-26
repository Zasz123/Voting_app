import Sequelize from 'sequelize';

const score = {
  voteId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  checked: {
    type: Sequelize.STRING,
    allowNull: false
  }
};


export default score;
