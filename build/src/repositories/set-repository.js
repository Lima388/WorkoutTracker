import { connection } from '../database/database.js';
async function insert(set) {
    connection.query(`
    INSERT INTO sets (weekid, exerciseid, reps, weight) VALUES $1;
  `, [set.weekid, set.exerciseid, set.reps, set.weight]);
}
async function remove(id) {
    connection.query(`
    DELETE FROM sets WHERE id=$1;
  `, [id]);
}
async function update(set) {
    connection.query(`
    UPDATE sets 
    SET weekid = $1,
        exerciseid = $2,
        reps = $3,
        weight = $4
    WHERE id=$5;
  `, [set.weekid, set.exerciseid, set.reps, set.weight, set.id]);
}
async function selectAll() {
    return connection.query(`
    SELECT * FROM sets;
  `);
}
async function selectById(id) {
    return connection.query(`
    SELECT * FROM sets WHERE id = $1
  `, [id]);
}
const setRepository = {
    insert,
    remove,
    update,
    selectAll,
    selectById,
};
export default setRepository;
//# sourceMappingURL=set-repository.js.map