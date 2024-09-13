// import any models needed 
import Album from '../models/album.model.js';

// export an object with methods for all of the routes
export const albumController = {
    // CREATE 
    createAlbum: async (req, res) => {
        try {
            const newAlbum = await Album.create(req.body) // creates the new album with id and timestamps 
            console.log(newAlbum);
            return res.status(201).json(newAlbum)
        }
        catch (err) {
            console.log('ERROR: ', err);
            return res.status(500).json(err)
        }
    },
    // READ ALL 
    getAllAlbums: async (req, res) => {
        try {
            const allAlbums = await Album.find()
            return res.status(200).json(allAlbums)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    // READ ONE 
    getOneAlbum: async (req, res) => {
        try {
            const id = req.params.id
            const oneAlbum = await Album.findById(id)
            return res.status(200).json(oneAlbum)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    // DELETE 
    deleteAlbum: async (req, res) => {
        try {
            const id = req.params.id
            await Album.findByIdAndDelete(id)
            return res.status(204).send()
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    // UPDATE 
    updateAlbum: async (req, res) => {
        try {
            const options = {
                new: true, // this makes mongoose return the updated doc after updating rather than the old original prior to updating 
                runValidators: true // runs validations same as create
            }
            const id = req.params.id
            const updatedAlbum = await Album.findByIdAndUpdate(id, req.body, options)
            return res.status(201).json(updatedAlbum)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    }
}