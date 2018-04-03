import express from 'express';
import apiRouter from './index';
const app = express();

app.get('/', (req, res) => res.send('Hello app!'));

app.use('/api', apiRouter);

app.listen(3000, () => {});
