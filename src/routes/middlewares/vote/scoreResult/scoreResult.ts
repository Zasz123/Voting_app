import { NextFunction, Request, Response } from 'express';

import Vote from '../../../../../database/models/vote.model';
import Opt from '../../../../../database/models/option.model';
import Score from '../../../../../database/models/score.model';

const ScoreResult = async(req: Request, res: Response, next: NextFunction) => {

    try {

        const vote = await Vote.findOne({
            include: [
                { model: Opt },
            ]
        });

        const result = await Opt.findAndCountAll({
            where: {
                voteId: req.params.url
            },
            include: [
                { model: Score }
            ]
        })

        let scores = new Array;

        for(let i in result.rows) {
            let keys = result.rows[i].opt;
            let value = result.rows[i].score.length;
            scores.push({key : keys, value : value})
        }

        res.json({
            success: true,
            vote,
            scoers: scores
        });

    } catch(error) {
        console.log(error);
        res.json(error);
    }
}

export default ScoreResult;
