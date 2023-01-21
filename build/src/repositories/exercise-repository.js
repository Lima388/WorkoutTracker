import { connection } from '../database/database.js';
async function insert(name) {
    connection.query(`
    INSERT INTO exercises (name) VALUES $1;
  `, [name]);
}
async function remove(id) {
    connection.query(`
    DELETE FROM exercises WHERE id=$1;
  `, [id]);
}
async function update(name, id) {
    connection.query(`
    UPDATE exercises SET name = $1 WHERE id=$2;
  `, [name, id]);
}
async function selectAll() {
    return connection.query(`
    SELECT * FROM exercises;
  `);
}
async function selectById(id) {
    return connection.query(`
    SELECT * FROM exercises WHERE id = $1
  `, [id]);
}
const exerciseRepository = {
    insert,
    remove,
    update,
    selectAll,
    selectById
};
export default exerciseRepository;
//# sourceMappingURL=exercise-repository.js.map