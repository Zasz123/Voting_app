import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.get('/votes/:id', (req, res) => {
    sequelize.models.vote.find({where: {id: req.params.id}})
    .then((result) => {
        // view page 랜더링
        // res.render('~', {
        //     show: result
        // });
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
        res.json({
            success: false
        });
    });
});

export default api;