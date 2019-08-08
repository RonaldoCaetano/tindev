const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();
mongoose.connect("mongodb+srv://ronaldo:ronaldo@oministack-fxr1u.mongodb.net/Oministack?retryWrites=true&w=majority", {
    useNewUrlParser : true
});

server.use(cors());
server.use(express.json()); //Expecifica que vamos utilizar requisições do tipo JSON
server.use(routes); //Como se fosse um puglin sendo utilizado

server.listen(3333);