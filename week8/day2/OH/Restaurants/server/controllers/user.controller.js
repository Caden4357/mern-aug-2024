import User from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
export const register = async (req, res) => {
    try{
        console.log(req.body);
        const newUser = await User.create(req.body)
        const userToken = jwt.sign(
            {userId:newUser._id, username:newUser.username},
            process.env.SECRET_KEY
            )
        console.log(userToken);
        res.cookie('userToken', userToken, {httpOnly:true})
        return res.status(201).json(newUser)
    }
    catch(err){
        console.log('ERROR', err);
        return res.status(500).json(err)
    }
}

export const login = async (req, res) => {
    // Check if the user exists
    const {email, password} = req.body
    const potentialUser = await User.findOne({email:email})
    if(!potentialUser){
        return res.status(404).json({message:'user not found'})
    }
    // if we get to this point we know there is a user with the given email 
    console.log(password, potentialUser);
    const isPasswordCorrect = await bcrypt.compare(password, potentialUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({ message: "Invalid credentials" });
    }
    // if we got here we know that the user exists and the passwords match 
    const userToken = jwt.sign(
        {userId:potentialUser._id, username:potentialUser.username},
        process.env.SECRET_KEY
        )
    console.log(userToken);
    res.cookie('userToken', userToken, {httpOnly:true})
    return res.status(201).json(potentialUser)

}

export const getLoggedInUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        return res.status(200).json(user)
        
    }
    catch(err){
        return res.status(500).json(err)
        
    }
}

export const logout = async (req, res) => {
    res.clearCookie('userToken')
    return res.status(200).json({message:'Successfully logged out'})
}