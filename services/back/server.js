'use strict';

const app = require('express')();
const server = require('http').Server(app);

import { Socket } from 'api/socket';
import { NODE } from 'constants/server';
import api from 'api';


app.use('/', api);

let socket = new Socket(server);

server.listen(NODE.PORT, NODE.HOST, () => {
  console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`);
});
