import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.post('/votes', (req, res) => {
    sequelize.models.vote.create({
        title: req.body.title,
        option1: req.body.option[0],
        option2: req.body.option[1],
        option3: req.body.option[2] || null
    })
    .then((result) => {
        console.log('투표 만들기 성공');
        res.json({
            success: true
        })
    })
    .catch((err) => {
        console.log(err);
        res.json({
            success: false
        });
    });
});

export default api;