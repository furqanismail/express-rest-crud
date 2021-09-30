require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet')

const todosRouter = require('./routes/todo');
const usersRouter = require('./routes/user');

const verifyToken = require('./middlewares/verifyToken')

const app = express();

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/todo', verifyToken, todosRouter);
app.use('/api/v1/auth', usersRouter);

module.exports = app;
