import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.get('/result/:url', (req, res) => {
  sequelize.models.vote.find({
    where: { url: req.params.url } })
    .then((result4) => {
      sequelize.models.score.findAndCountAll({
        attributes: ['checked'],
        where: { voteId: req.params.url }
      })
        .then((result) => {
          sequelize.models.vote.findAndCountAll({
            include: { model: sequelize.models.score,
              attributes: ['checked'],
              where: { voteId: req.params.url,
                checked: { $col: 'vote.ans1' } } }
          })
            .then((result1) => {
              sequelize.models.vote.findAndCountAll({
                include: { model: sequelize.models.score,
                  attributes: ['checked'],
                  where: { voteId: req.params.url,
                    checked: { $col: 'vote.ans2' } } }
              })
                .then((result2) => {
                  res.json({
                    total: result.count,
                    ans11: result1.count,
                    ans22: result2.count,
                    ans1: result4.ans1,
                    ans2: result4.ans2
                  });
                });
            });
        });
    }).catch((err) => {
      console.log(err);
      res.json({
        success: false
      });
    });
});


export default api;
