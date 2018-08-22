import Sequelize from 'sequelize';

const score = {
  voteId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  selected: {
    type: Sequelize.STRING,
    allowNull: false
  }
};


export default score;
