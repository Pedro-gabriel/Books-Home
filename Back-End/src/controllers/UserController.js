const knex = require('../database')

module.exports = {
    async index(req, res){
        const results = await knex('users')

        return res.json(results)
    },
    async create(req, res, next){

        try {
            const { username,login,senha,email,cpf,telefone, cep, endereco, complemento, numero, linkwhatsapp} = req.body

            await knex('users').insert({ username, login, senha, email, cpf, telefone, cep, endereco, complemento,numero,linkwhatsapp })

            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },
    async update(req, res, next){
        try {
            const { username,login,senha,email,cpf,telefone, cep, endereco, complemento,numero,linkwhatsapp } = req.body
            const { id } = req.params
            await knex('users')
            .update({ username,login,senha,email,cpf,telefone, cep, endereco, complemento,numero,linkwhatsapp})
            .where({id})
            return res.send()
        } catch (error) {
            next(error)
        }
    },
        async delete(req, res, next){
            try {
                const { id } = req.params
                await knex('users')
                .where({ id })
                .delete()

                return res.send()
            } catch (error) {
                next(error)
            }
        },
            async updatelogin(req, res, next){
                try {
                    const {login,senha} = req.body
                    const { id } = req.params
                    await knex('users')
                    .update({ login,senha})
                    .where({id})
                    return res.send()
                } catch (error) {
                    next(error)
                }
            }

}