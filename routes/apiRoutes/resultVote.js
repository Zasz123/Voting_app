import express from 'express';

import sequelize from '../../database/connection';

const api = express();

api.get('/results/:id', (req, res) => {
    sequelize.models.vote.findAll( {where: { id: req.params.id }}).then( (result) => {
      var loopIndex = 0;
   
      for(let vote of result){
        sequelize.models.vote.find({
          include: {model: sequelize.models.score, where: {voteId: req.params.id}}
        }).then( (result2) => {
            console.log('result2: ', result2);
            console.log('scores: ', result2.scores);
          if(result2){
            vote.scores = result2.scores
          }
   
          loopIndex++;
          if( loopIndex === result.length){
              console.log('result : ', result);
              console.log('scores: ', vote.scores);
            // res.render("~", {
            //   req : result, re: vote.replies
            // });
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