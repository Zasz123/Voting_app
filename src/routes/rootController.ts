import { Router } from 'express';

const router = Router();

import VoteController from './controllers/vote.controller';

router.use('/', VoteController);

export default router;