import { Table, DataType, Model, PrimaryKey, Column, AllowNull, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript';

import Vote from './vote.model';
import Opt from './option.model';

@Table({
    timestamps: true
})
export default class Score extends Model<Score> {
    //Columns
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id: number

    @ForeignKey(() => Vote)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    voteId: number

    @ForeignKey(() => Opt)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    optId: number

    //Relationship
    @BelongsTo(() => Vote, {
        onDelete: 'CASCADE'
    })
    vote: Vote

    @BelongsTo(() => Opt, {
        onDelete: 'CASCADE'
    })
    opt: Opt
}