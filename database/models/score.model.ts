import { Table, DataType, Model, PrimaryKey, Column, AllowNull, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript';

import Vote from './vote.model';

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

    @AllowNull(false)
    @Column(DataType.STRING)
    checked: string

    //Relationship
    @BelongsTo(() => Vote, {
        onDelete: 'CASCADE'
    })
    vote: Vote
}