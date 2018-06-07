const express = require('express');
const app = express()
const indexRouter = require('./indexa');
const userRouter = require('./usera');

app.use('/a', indexRouter);
app.use('/', userRouter);

app.listen(3001);