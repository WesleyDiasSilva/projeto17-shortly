import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes';
import rankingRoutes from './routes/rankingRoutes';
import urlsRoutes from './routes/urlsRoutes';
import userRoutes from './routes/userRoutes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(rankingRoutes);
server.use(authRoutes);
server.use(urlsRoutes);
server.use(userRoutes);

const port = process.env.PORT ?? 4000;
server.listen(port, () =>
  console.log(`Server is running in: ${port}`)
);
