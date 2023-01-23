import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Week } from "../protocols/week.js";

async function insert(): Promise<QueryResult<any>>{
  return connection.query(`
    INSERT INTO weeks DEFAULT VALUES;
  `,[]);
}

async function remove(id:number): Promise<QueryResult<any>>{
  return connection.query(`
  DELETE FROM weeks WHERE id=$1;
  `,[id]);
  
}
async function selectAllWithSets(): Promise<QueryResult<Week>> {
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