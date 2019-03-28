import express from 'express';

import sequelize from '../../../database/connection';

const api = express();

api.post('/votes', (req, res) => {
  sequelize.models.vote.create({
    ques: req.body.ques,
    url: req.body.url,
    ans1: req.body.ans1,
    ans2: req.body.ans2,
    ans3: req.body.ans3,
	  ans4: req.body.ans4, 
	  ans5: req.body.ans5,
	  ans6: req.body.ans6,
	  ans7: req.body.ans7,
	  ans8: req.body.ans8,
  })
    .then((result) => {
      console.log('투표 만들기 성공');
      res.json({
        success: true,
        ques: result.ques,
        url: result.url,
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
