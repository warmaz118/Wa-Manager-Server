import express from 'express';
import { store, index } from '../Controller/UserController.ts';
const routerUser = express.Router();

routerUser.get('/', index);
routerUser.post('/', store);

export default routerUser;
