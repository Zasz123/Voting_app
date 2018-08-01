import express from 'express';

import insertVoteRouter from './apiRoutes/voteInsert';
import showVoteRouter from './apiRoutes/showVote';
import selectVoteRouter from './apiRoutes/selected';
import voteResultRouter from './apiRoutes/resultVote';

const api = express();

api.use('/', insertVoteRouter);

api.use('/', showVoteRouter);

api.use('/', selectVoteRouter);

api.use('/', voteResultRouter);

export default api;