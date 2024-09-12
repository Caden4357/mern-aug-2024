// const app = require('express') old way of importing modules, files, libaries etc.
import express, { response } from 'express';
const app = express()
const port = 8000
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );

// get: read 
// post: create new 
// put: update
// delete: delete


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

// post request
app.post('/api/v1/user', (req, res) => {
    console.log('REQ BODY: ', req.body);
    // call a db method and pass in req.body
    res.json('working')
})


app.listen(port, () => {
    console.log('Running on port ' + port);
})