const knex = require('../database')

module.exports = {
    async index(req, res,){
        const results = await knex('desejo')

        return res.json(results)
    },
    async create(req, res, next){

        try {
            const { products_id,user_id} = req.body

            await knex('products').insert({ products_id, user_id})

            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },
        async delete(req, res, next){
            try {
                const { id } = req.params
                await knex('desejo')
                .where({ id })
                .delete()

                return res.send()
            } catch (error) {
                next(error)
            }
        }

}