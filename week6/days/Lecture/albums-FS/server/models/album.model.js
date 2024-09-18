import { Schema, model } from "mongoose";

const albumSchema = new Schema({
    title:{
        type:String,
        required: [true, "Title is required!"],
        minLength:[2, 'Title must be 2 or more characters'],
        maxlength: [255, "Title must be less than 255 characters long"]
    },
    artist:{
        type:String,
        required: [true, "Artist is required!"],
        minLength:[2, 'Artist must be 2 or more characters'],
        maxlength: [255, "Artist must be less than 255 characters long"]
    },
    releaseYear: {
        type: Number,
        required: [true, "release year is required!"],
    },
    isExplicit: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})
const Album = model('Album', albumSchema)
export default Album