const express = require('express');
const app = express();
const connection = require('./database/database');

const categoriesController = require('./categories/categories-controller');
const articlesController = require('./articles/articles-controller.js');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso!');
    }).catch((error)=>{
        console.log(error);
    })

app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req,res)=>{
    res.render('index-view');
})

app.listen(8080, ()=>{
    console.log('o servidor está rodando');
})