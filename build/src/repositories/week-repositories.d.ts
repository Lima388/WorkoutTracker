declare function insert(): Promise<void>;
declare function remove(id: number): Promise<void>;
declare function selectAll(): Promise<import("pg").QueryResult<any>>;
declare const weekRepository: {
    insert: typeof insert;
    remove: typeof remove;
    selectAll: typeof selectAll;
};
export default weekRepository;
