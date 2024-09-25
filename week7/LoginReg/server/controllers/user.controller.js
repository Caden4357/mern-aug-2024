import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const UserController = {
    register: async (req, res) => {
        try{
            // Check to see if a user already exists with that email
            const potentialUser = await User.findOne({email:req.body.email})
            console.log(potentialUser);
            if(potentialUser){
                res.status(400).json({message:'Email already exists please login'})
            }
            // create a new user with form data 
            const newUser = await User.create(req.body)
            console.log("NEW USER :",newUser);
            // ! Generate JWT and send with response 
            res.status(201).json(newUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}