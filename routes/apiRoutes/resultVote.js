import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.get('/:id/r', (req, res) => {
  sequelize.models.vote.findAll({ where: { id: req.params.id } }).then((result) => {
    let loopIndex = 0;

    for (const vote of result) {
      sequelize.models.vote.find({
        include: { model: sequelize.models.score, where: { voteId: req.params.id } }
      }).then((result2) => {
        console.log('result2: ', result2);
        console.log('scores: ', result2.scores);
        if (result2) {
          vote.scores = result2.scores;
        }

        loopIndex++;
        if (loopIndex === result.length) {
          console.log('result : ', result);
          console.log('scores: ', vote.scores);
        }
      });
    }
  }).catch((err) => {
    console.log(err);
    res.json({
      success: false
    });
  });
});


export default api;
