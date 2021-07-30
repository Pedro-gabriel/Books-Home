'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next)=>{

}

exports.post = (req, res, next) =>{
    var product = new Product(req.body);
    product.save().then(x =>{
        res.status(201).send({message:'produto cadastrado com sucesso'});
    }).catch(e =>{
        res.status(400).send({message:'Falha ao cadastrar o produto',
    data: e});
    });
};

exports.put = (req, res, next) =>{
    const id = req.parser.id;
    res.status(200).send({
        id: id,
        req: req.body
    });
};

exports.delete = (req, res, next) =>{
    res.status(200).send(req.body);
};