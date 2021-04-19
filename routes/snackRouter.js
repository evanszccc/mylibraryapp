const express = require('express')

// add our router 
const snackRouter = express.Router()

// add the snack controller
const snackController = require('../controllers/snackController.js')

// handle the GET request to get all snacks
snackRouter.get('/', snackController.getAllSnacks)

// handle the GET request to get one snack
snackRouter.get('/:name', snackController.getSnackByName)


// export the router
module.exports = snackRouter