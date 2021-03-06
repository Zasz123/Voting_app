import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.get('/vote/:url', (req, res) => {
  sequelize.models.vote.find({
    where: { url: req.params.url }
  })
    .then((result) => {
      console.log(result);
      res.json({
        ques: result.ques,
        ans1: result.ans1,
        ans2: result.ans2
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
