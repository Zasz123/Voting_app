import { NextFunction, Request, Response } from 'express';

import Vote from '../../../../../database/models/vote.model';
import Opt from '../../../../../database/models/option.model';

const ShowVote = async(req: Request, res: Response, next: NextFunction) => {

    try {

        const vote = await Vote.findOne({
            include: [
                { model: Opt }
            ]
        });

        res.json({
            success: true,
            vote
        });

    } catch(error) {
        console.log(error)
        res.json(error);
    }
}

export default ShowVote;