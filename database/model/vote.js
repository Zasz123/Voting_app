import Sequelize from 'sequelize'

const vote = {
    title: {
        type: Sequelize.STRING,
        allowNull:false
    },
    option1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    option2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    option3:{
        type: Sequelize.STRING,
        allowNull: true
    }
};


export default vote;