const knex = require('../database');

module.exports = {
    async index(req, res , next){
        try {
            const { user_id, page = 1 } = req.query;

            const query = knex('products')
            .limit(5)
            .offset((page - 1 )* 5)
            
            const countObj =  knex('products').count()


            if(user_id){
                query
                    .where({user_id})
                    .join('users', 'users.id', '=', 'products.user_id')
                    .select('products.*', 'users.username')
                countObj
                    .where({user_id})
            }
            const [count] = await countObj
            
            res.header('x-total-Conut', count["count"])
            
            const results = await query
            return res.json(results)
        } catch (error) {
            next(error)
        }
    }, 
    async create (req, res, next){
        try {
            const {titulo, autor,descricao, quantidade, edicao, editora, isbn, negociavel, genero, preco, estado, link, user_id } = req.body
            await knex('products').insert({
                titulo,
                autor,
                descricao,
                quantidade,
                edicao,
                editora,
                isbn,
                negociavel,
                genero,
                preco,
                estado,
                link,
                user_id
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
    }
}