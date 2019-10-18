import { Table, DataType, Model, PrimaryKey, Column, AllowNull, AutoIncrement, Unique, HasMany } from 'sequelize-typescript';

import Score from './score.model';
import Opt from './option.model';

@Table({
    timestamps: true
})
export default class Vote extends Model<Vote> {
    // Columns
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    url: number

    @AllowNull(false)
    @Column(DataType.STRING)
    ques: string


    //Relationship
    @HasMany(() => Score)
    score: Score[]

    @HasMany(() => Opt)
    opt: Opt[]
}