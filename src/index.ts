import express from 'express';
import dotenv from 'dotenv';
import setsRouter from './routers/sets-routers.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(setsRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server running in port: ${process.env.PORT}`)
);
