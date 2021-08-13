const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const ProductsController = require('./controllers/ProductsController') 

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/products', ProductsController.index)
routes.post('/products', ProductsController.create)
routes.delete('/products/:id', ProductsController.delete)


module.exports = routes