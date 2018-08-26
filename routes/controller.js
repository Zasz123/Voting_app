import express from 'express';

import insertVoteRouter from './Middlewares/makeVote/voteInsert';
import showVoteRouter from './Middlewares/showVote/showVote';
import selectVoteRouter from './Middlewares/insertScore/selected';
import voteResultRouter from './Middlewares/scoreResult/resultVote';

const api = express();

api.use('/', insertVoteRouter);

api.use('/', showVoteRouter);

api.use('/', selectVoteRouter);

api.use('/', voteResultRouter);

export default api;
