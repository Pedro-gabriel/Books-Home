const knex = require('../database');

module.exports = {
    async index(req, res , next){
        try {
            const {page = 1 } = req.query;

            const countObj = await knex('products').count();
            const query = knex('products')
            .limit(5)
            .offset((page - 1 )* 5)

            res.header('X-Total-Count', countObj[0]['count'])
            
            const results = await query
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }, 
    async create (req, res, next){
        try {
            const {titulo, autor,descricao,estado, telefone } = req.body
            await knex('products').insert({
                titulo,
                autor,
                descricao,
                estado,
                telefone,
            })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async delete (req, res, next){
        try {
            const {id} = req.params
            await knex('products')
            .where({id})
            .delete()

            return res.send()
        } catch (error) {
            next(error)
        }
    },


   async update (req, res, next){

        try {
            const {titulo, autor,descricao,estado, telefone } = req.body
            const {id} = req.params
            await knex('products')
            .where({id})
            .update({titulo, autor, descricao, estado, telefone})

            return res.send()
        } catch (error) {
            next(error)
        }
    },

}