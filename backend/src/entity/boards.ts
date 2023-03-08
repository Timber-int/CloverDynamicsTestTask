import {Column, Entity, OneToMany} from 'typeorm';
import {CONSTANTS} from '../constants';
import {DefaultValue} from './defaultValue';
import {BoardTable} from "./boardTables";

export interface IBoard {
    id: number,
    title: string,
    tables?: BoardTable[],
}

@Entity('boards', {database: CONSTANTS.DATA_BASE})
export class Board extends DefaultValue implements IBoard {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true
    })
    title: string;

    @OneToMany(() => BoardTable, (BoardTable) => BoardTable.board)
    tables: BoardTable[];
}
