import { QueryResult } from 'pg';
import { Exercise } from '../protocols/exercise.js';
declare function insert(name: string): Promise<void>;
declare function remove(id: number): Promise<void>;
declare function update(name: string, id: number): Promise<void>;
declare function selectAll(): Promise<QueryResult<Exercise[]>>;
declare function selectById(id: number): Promise<QueryResult<Exercise[]>>;
declare const exerciseRepository: {
    insert: typeof insert;
    remove: typeof remove;
    update: typeof update;
    selectAll: typeof selectAll;
    selectById: typeof selectById;
};
export default exerciseRepository;
