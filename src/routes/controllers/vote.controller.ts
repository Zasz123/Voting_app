import { Router } from 'express';

const router = Router();

import AddVote from '../middlewares/vote/addVote/addVote';

import AddScore from '../middlewares/vote/addScore/addScore';

import ShowVote from '../middlewares/vote/showVote/showVote';

import ScoreResult from '../middlewares/vote/scoreResult/scoreResult';


// add vote
router.post('/', AddVote);

// select question
router.post('/select/:url', AddScore);

// show vote
router.get('/vote/:url', ShowVote);

// show vote result
router.get('/result/:url', ScoreResult);

export default router;