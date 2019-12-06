const express = require('express')

import baseRouter from 'api/base';


const api = express();

api.use('/', baseRouter);


export default api;
