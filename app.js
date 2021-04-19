const express = require('express')
const app = express() 

// set up snack routes
const snackRouter = require('./routes/snackRouter')

// handler for GET home page
app.get('/', (req, res) => {
    res.send('<h1>Snacks in van</h1>')
})

// handler for snack-management requests
app.use('/snack-management', snackRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('The van-snacks app is running')
})
