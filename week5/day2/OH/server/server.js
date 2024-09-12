import express from 'express';
const app = express()
const port = 8000
import { tvShows } from './data.js';

// get route to return the entire list of tv shows 
app.get('/api/tvshows', (req, res) => {
    res.json(tvShows)
})
// Create a GET route that includes a "year" path parameter. This route should return an array of all TV shows that aired during the year specified in the parameter.
app.get('/api/tvshows/:year', (req, res) => {
    const year = req.params.year
    const getShowsByYear = tvShows.filter((tvShow) => tvShow.yearCreated == year)
    res.json(getShowsByYear)
})
// Create a DELETE route with a title path parameter. Remove the tvShows array element matching the path parameter and respond with the updated array.
app.delete('/api/tvshows/:title', (req, res) => {
    const title = req.params.title
    const updatedShowList = tvShows.filter(show => show.tvShow !== title)
    res.json(updatedShowList)
})
// Create a PATCH route with a title path parameter that changes the array item's starring property to the request's body.
// PUT: for updating entire document 
// PATCH: for updating a specific part of the document
app.patch('/api/tvshows/:title', (req, res) => {
    const urlTitle = req.params.title
    tvShows.forEach((show, idx) => {
        if(show.tvShow == urlTitle){
            tvShows.starring = req.body.starring
        }
    })
    res.json(tvShows)
})
app.listen(port, () => {
    console.log(`Your server is running on ${port}`);
})
