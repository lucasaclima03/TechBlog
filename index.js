const express = require('express');
const app = express();
const connection = require('./database/database');

const categoriesController = require('./categories/Categories-controller');
const articlesController = require('./articles/Articles-controller.js');

const Article = require ('./articles/Article');
const Category = require ('./categories/Category')

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
    Article.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(articles=>{
        Category.findAll().then(categories=>{
            res.render('index-view', {articles: articles, categories: categories});
        });        
    })    
})

app.get('/:slug', (req,res)=>{
    var slug = req.params.slug;
    Article.findOne({
        where:{
            slug: slug
        }
    }).then(article=>{
        if(article != undefined){
             Category.findAll().then(categories=>{
            res.render('article-view', {article: article, categories: categories});
        });  
        }else{
            res.redirect('/');
        }
    }).catch(err=> {
        res.redirect('/');
    })
})

app.get('/category/:slug', (req, res)=>{
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category=>{
        if(category != undefined){
            Category.findAll().then(categories=>{
                res.render('index-view', {articles: category.articles, categories: categories});
            })
        }else{
            res.redirect('/');
        }
    }).catch(err=>{
        res.redirect('/');
    })
})

app.listen(8080, ()=>{
    console.log('o servidor está rodando');
})