declare function insert(name: string): Promise<void>;
declare function remove(id: number): Promise<void>;
declare function update(name: string, id: number): Promise<void>;
declare function selectAll(): Promise<import("pg").QueryResult<any>>;
declare function selectById(id: number): Promise<import("pg").QueryResult<any>>;
declare const exerciseRepository: {
    insert: typeof insert;
    remove: typeof remove;
    update: typeof update;
    selectAll: typeof selectAll;
    selectById: typeof selectById;
};
export default exerciseRepository;
