import { connection } from "../database/database.js";
async function insert() {
    connection.query(`
    INSERT INTO weeks DEFAULT VALUES;
  `, []);
}
async function remove(id) {
    connection.query(`
  DELETE FROM sets WHERE weekid=$1;
  `, [id]);
    connection.query(`
  DELETE FROM weeks WHERE id=$1;
  `, [id]);
}
async function selectAllWithSets() {
    return connection.query(`
    SELECT 
      weeks.id AS id,
      COALESCE(json_agg(json_build_object('id', sets.id,'exerciseid', exercises.id, 'exercisename', exercises.name, 'weight', sets.weight, 'reps', sets.reps)), '[]') as sets
    FROM 
      weeks
      LEFT JOIN sets ON weeks.id = sets.weekid
      LEFT JOIN exercises ON sets.exerciseid = exercises.id
    GROUP BY weeks.id;
  `);
}
const weekRepository = {
    insert,
    remove,
    selectAllWithSets,
};
export default weekRepository;
//# sourceMappingURL=week-repository.js.map