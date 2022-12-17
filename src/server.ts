import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(authRoutes);

const port = process.env.PORT ?? 4000;
server.listen(port, () =>
  console.log(chalk.bgBlack.cyan(`Server is running in: ${port}`))
);
