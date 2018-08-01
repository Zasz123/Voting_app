import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.post('/selected/:id', (req, res) => {
    sequelize.models.score.create({
        selected: req.body.selected,
        voteId: req.params.id
    })
    .then((result) => {
        res.json({
            success: true
        });
    })
    .catch((err) => {
        res.json({
            success: false
        });
    });
});

export default api;