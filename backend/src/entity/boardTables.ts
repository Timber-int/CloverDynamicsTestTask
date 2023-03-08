import {Column, Entity, JoinColumn, ManyToOne,} from 'typeorm';
import {CONSTANTS} from '../constants';
import {DefaultValue} from './defaultValue';
import {Board} from "./boards";

export interface IBoardTable {
    id: number,
    title: string,
    boardId: number,
    board?: Board,
}

@Entity('boardtables', {database: CONSTANTS.DATA_BASE})
export class BoardTable extends DefaultValue implements IBoardTable {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'int',
    })
    boardId: number;

    @ManyToOne(() => Board, (Board) => Board.tables)
    @JoinColumn({name: 'boardId'})
    board: Board;
}
