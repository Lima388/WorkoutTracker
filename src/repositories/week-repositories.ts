import { connection } from "../database/database.js";

async function insert(){
  connection.query(`
    INSERT INTO weeks DEFAULT VALUES;
  `,[]);
}

async function remove(id:number){
  connection.query(`
  DELETE FROM weeks WHERE id=$1;
  `,[id]);
}
async function selectAll() {
  return connection.query(`
    SELECT * FROM weeks;
  `);
}
const weekRepository = {
  insert,
  remove,
  selectAll,
};

export default weekRepository;