import { QueryResult } from 'pg';
import {connection} from '../database/database.js';
import { Set } from '../protocols/set.js';


async function insert(set: Set): Promise<QueryResult<any>> {
  return connection.query(`
    INSERT INTO sets (weekid, exerciseid, reps, weight) VALUES ($1, $2, $3, $4);
  `,[set.weekid, set.exerciseid, set.reps, set.weight]);
}

async function remove(id: number): Promise<QueryResult<any>> {
  return connection.query(`
    DELETE FROM sets WHERE id=$1;
  `,[id]);
}

async function removeByWeekid(weekid: number): Promise<QueryResult<any>> {
  return  connection.query(`
  DELETE FROM sets WHERE weekid=$1;
  `,[weekid]);
}

async function update(set: Set): Promise<QueryResult<any>> {
  return connection.query(
    `
    UPDATE sets
    SET exerciseid = $2,
        reps = $3,
        weight = $4,
        weekid=$5
    WHERE id=$1;
  `,
    [set.id, set.exerciseid, set.reps, set.weight, set.weekid]
  );
}

async function selectAll(): Promise<QueryResult<Set>> {
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

async function selectById(id: number): Promise<QueryResult<Set>> {
  return connection.query(`
    SELECT * FROM sets WHERE id = $1
  `,[id]);
}

const setRepository = {
  insert,
  remove,
  update,
  selectAll,
  selectById,
  removeByWeekid
};

export default setRepository;
