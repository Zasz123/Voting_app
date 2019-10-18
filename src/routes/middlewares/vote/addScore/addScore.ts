import { NextFunction, Request, Response } from 'express';

import Score from '../../../../../database/models/score.model';

const AddScore = (req: Request, res: Response, next: NextFunction) => {
    
    try {

        Score.create({
            voteId: req.params.url,
            checked: req.body.checked
        });

        res.json({
            success: true,
            error: false
        });

    } catch(error) {
        console.error(error);
        res.json(error);
    }
}

export default AddScore;