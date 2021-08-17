### TechBlog   

Criação de um blog com painel administrativo e sistema de login.


Com o blog você poderá:  
* Ler artigos
* Realizar login na área restrita do site
* Escrever novos artigos
* Editar seus artigos
* Deletar um arquivo

![Caption](https://github.com/lucasaclima03/TechBlog/blob/main/TechBlog.gif)


### Tecnologias utilizadas:  
* NodeJs com Express
* HTML5
* CSS com Bootstrap
* Bcrypt
* EJS como view engine  
* MySQL  
* TinyMCE  

### Como rodar o projeto:  
  
1 - Primeiramente faça o clone deste repositório para a sua máquina  

2 - Crie o banco de dados chamado `blog.sql `

3 - Vá até a pasta Database, altere o arquivo `example-database.js` para `database.js` e inclua os seus dados onde é requerido  

4 - Rode no terminal o comando `npm install` que instalará automaticamente todas as dependências necessárias para rodar a API e depois rode o comando `npm start` para iniciar o servidor.  

5 - Utilize o site normalmente na porta `8080` 

6 - Para criar, editar, deletar novas categorias e novos artigos, cadastre um usuário na rota:

> YOUR-HOST:8080/admin/users/create  

7 - Agora você poderá efetuar login na área administrativa e fazer as operações que desejar.


### Links
[Linkedin:] (https://www.linkedin.com/in/lucasaclima03/)

