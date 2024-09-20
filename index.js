import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import env from 'dotenv';
import connection from './connection/service.js';

const apps = express();
const httpServer = http.createServer(apps);
env.config();
const port = process.env.PORT || 8000;

apps.use(bodyParser.urlencoded({ extended: false }));
apps.use(bodyParser.json());

const callback = async () => {
    console.log(`Server running at ${httpServer.address().address} : ${port}`);
};

httpServer.listen(port, async () => callback());