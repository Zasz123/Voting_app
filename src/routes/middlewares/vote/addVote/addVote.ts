import { NextFunction, Request, Response } from 'express';

import Vote from '../../../../../database/models/vote.model';
import Option from '../../../../../database/models/option.model';

const MakeVote = async(req: Request, res: Response, next: NextFunction) => {
    
    try{

        const vote = await Vote.create({
            ques: req.body.ques,
            url: req.body.url
        });

        for(let i of req.body.opt){
            await Option.create({
                voteId: vote.url,
                opt: i
            });
        }

        res.json({
            success: true,
            error: false
        });

    } catch(error) {
        console.error(error);
        res.json(error);
    }

}

export default MakeVote;