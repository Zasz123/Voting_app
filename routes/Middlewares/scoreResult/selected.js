import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.post('/result/:id', (req, res) => {
  sequelize.models.score.create({
    selected: req.body.selected,
    voteId: req.params.id
  })
    .then((result) => {
      sequelize.models.vote.findAll({ where: { id: req.params.id } }).then((result) => {
        let loopIndex = 0;

        for (const vote of result) {
          sequelize.models.vote.find({
            include: { model: sequelize.models.score, where: { voteId: req.params.id } }
          }).then((result2) => {
            if (result2) {
              vote.scores = result2.scores;
            }

            loopIndex += 1;
            if (loopIndex === result.length) {
              res.json({
                results: result,
                scores: vote.scores
              });
              console.log('result : ', result);
              console.log('scores: ', vote.scores);
            }
          });
        }
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
