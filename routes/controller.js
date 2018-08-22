import express from 'express';

import insertVoteRouter from './Middlewares/makeVote/voteInsert';
import showVoteRouter from './Middlewares/showVote/showVote';
import selectVoteRouter from './Middlewares/scoreResult/selected';
import voteResultRouter from './apiRoutes/resultVote';

const api = express();

api.use('/', insertVoteRouter);

api.use('/', showVoteRouter);

api.use('/', selectVoteRouter);

api.use('/', voteResultRouter);

export default api;