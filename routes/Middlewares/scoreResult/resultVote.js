import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.get('/result/:url', (req, res) => {
  sequelize.models.vote.findAll({
    where: { url: req.params.url
    } })
    .then((result) => {
      console.log('들어옴');
      let loopIndex = 0;
      console.log(result);
      for (const vote of result) {
        console.log('들어옴1');
        sequelize.models.vote.find({
          include: { model: sequelize.models.score, where: { voteId: req.params.url } }
        }).then((result2) => {
          console.log('들어옴2');
          if (result2) {
            vote.scores = result2.scores;
          }
          let resu = 0;
          const ab = result2.scores.reduce((a, c) => {
            if (a[c.checked]) {
              a[c.checked] += 1;
              resu += 1;
            } else {
              a[c.checked] = 1;
              resu += 1;
            }
            return a;
          }, {});
          console.log(ab);
          console.log(resu);

          loopIndex += 1;
          if (loopIndex === result.length) {
            res.json({
              ans1: result[0].ans1,
              ans2: result[0].ans2,
              scores: ab,
              total: resu
            });
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
