import { connection } from '../database/database.js';
async function insert(set) {
    connection.query(`
    INSERT INTO sets (weekid, exerciseid, reps, weight) VALUES ($1, $2, $3, $4);
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
    SET exerciseid = $2,
        reps = $3,
        weight = $4,
        weekid=$5
    WHERE id=$1;
  `, [set.id, set.exerciseid, set.reps, set.weight, set.weekid]);
}
async function selectAll() {
    return connection.query(`
    SELECT 
      sets.id AS set_id,
      sets.weekid,
      sets.exerciseid,
      exercises.name as exercise_name,
      sets.weight,
      sets.reps
    FROM 
      sets 
      LEFT JOIN exercises ON sets.exerciseid = exercises.id
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