import { QueryResult } from "pg";
import { Week } from "../protocols/week.js";
declare function insert(): Promise<void>;
declare function remove(id: number): Promise<void>;
declare function selectAllWithSets(): Promise<QueryResult<Week>>;
declare const weekRepository: {
    insert: typeof insert;
    remove: typeof remove;
    selectAllWithSets: typeof selectAllWithSets;
};
export default weekRepository;
