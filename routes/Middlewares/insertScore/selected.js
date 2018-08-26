import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.post('/select/:url', (req, res) => {
  sequelize.models.score.create({
    checked: req.body.checked,
    voteId: req.params.url
  })
    .then((result) => {
      console.log(result);
      res.json({
        success: true
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        success: false
      });
    });
});

export default api;
