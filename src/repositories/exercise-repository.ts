import { connect } from 'net';
import { QueryResult } from 'pg';
import {connection} from '../database/database.js';
import { Exercise } from '../protocols/exercise.js';


async function insert(name:string) {
  connection.query(`
    INSERT INTO exercises (name) VALUES $1;
  `,[name]);
}

async function remove(id: number) {
  connection.query(`
    DELETE FROM exercises WHERE id=$1;
  `, [id]);
}

async function update(name: string, id: number) {
  connection.query(`
    UPDATE exercises SET name = $1 WHERE id=$2;
  `,[name,id]);
}

async function selectAll(): Promise<QueryResult<Exercise[]>>{
  return connection.query(`
    SELECT * FROM exercises;
  `)
}

async function selectById(id: number):Promise<QueryResult<Exercise[]>>{
  return connection.query(`
    SELECT * FROM exercises WHERE id = $1
  `,[id])
}

const exerciseRepository = {
  insert,
  remove,
  update,
  selectAll,
  selectById
};

export default exerciseRepository;
