//link to snacks model
const snacks = require('../models/snack')

// handle request to get all snacks
const getAllSnacks = (req, res) => {
    res.send(snacks) // send list to browser
}

// handle request to get one particular snack
const getSnackByName = (req, res) => {
	
	// search for snacks by name
	const snack = snacks.find(snack => snack.name === req.params.name);
	
	if (snack){
		res.send(snack); // send back the snack details
	}
	else{
		// you can decide what to return if snack is not found
		// currently, an empty list will be return.
		res.send([]); 
	}
}



module.exports = {
    getAllSnacks, getSnackByName
}