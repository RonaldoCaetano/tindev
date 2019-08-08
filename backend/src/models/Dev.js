const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name : {
        type: String,
        required : true
    },

    user : {
        type : String,
        required : true
    },

    bio : String,
    
    avatar : {
        type : String,
        required : true
    },

    likes : [{ //Colchete para representar um vetor
        type : Schema.Types.ObjectId,
        ref : 'Dev', //Como se fosse uma chave estrangeira
    }],

    dislikes : [{
        type : Schema.Types.ObjectId,
        ref : 'Dev',
    }],

}, {
    timestamps : true, //cria duas colunas automatica createdAt, updatedAt
});

module.exports = model('Dev', DevSchema); //Exportar o modelo para ser utilizado

//Quem exportar ja pode ser utilizado, para inserir