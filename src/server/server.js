import express from 'express';
import path from 'path';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../client/public'));
server.use(express.static(path.join(__dirname, '../client/public')));

server.use('/', apiRouter);

server.listen(3000, () => {
    console.log('running at localhost: 3000');
});
