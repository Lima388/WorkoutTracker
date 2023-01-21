import { QueryResult } from 'pg';
import { Set } from '../protocols/set.js';
declare function insert(set: Set): Promise<void>;
declare function remove(id: number): Promise<void>;
declare function update(set: Set): Promise<void>;
declare function selectAll(): Promise<QueryResult<Set>>;
declare function selectById(id: number): Promise<QueryResult<Set>>;
declare const setRepository: {
    insert: typeof insert;
    remove: typeof remove;
    update: typeof update;
    selectAll: typeof selectAll;
    selectById: typeof selectById;
};
export default setRepository;
