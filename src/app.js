'use strict' // corretor de codigo
//instancias
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conexao com o banco
mongoose.connect('mongodb+srv://dbuser:12345qwe@cluster0.7jzci.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

//carregar os models
const Product = require('./models/product');

//carregar as rotas
const index = require('./routes/index');
const livro = require('./routes/livro');


app.use(bodyParser.json());// converte o conteudo para json
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/livro', livro);

module.exports = app;