import express from 'express';

import insertVoteRouter from './Middlewares/makeVote/voteInsert';
import showVoteRouter from './Middlewares/showVote/showVote';
import selectVoteRouter from './Middlewares/insertScore/selected';
import voteResultRouter from './Middlewares/scoreResult/resultVote';

const api = express();

// 투표 만들기
api.use('/', insertVoteRouter);

// 선택 투표 조회
api.use('/', showVoteRouter);

// 투표 하기
api.use('/', selectVoteRouter);

// 투표 결과 보기
api.use('/', voteResultRouter);

export default api;
