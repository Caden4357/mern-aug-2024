// const app = require('express') old way of importing modules, files, libaries etc.
import express, { response } from 'express';
const app = express()
const port = 8000



// Setting up routes
// app.{method}(route, callback);
// http://localhost:8000/api
app.get('/api/v1', (req, res) => {
    res.json({message:"Hello World"})
})

// Path parameters
app.get('/api/v1/user/:id', (req, res) => {
    console.log('PARAMS: ', req.params);
    res.json({message:"Worked"})
})



app.listen(port, () => {
    console.log('Running on port ' + port);
})