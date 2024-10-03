import Restaurant from "../models/restaurant.model.js";
import jwt from 'jsonwebtoken';

export const create = async (req, res) => {
    try {
        const decodedToken = jwt.decode(req.cookies.userToken, { complete: true });
        console.log(decodedToken);
        const userId = decodedToken.payload.userId;
        const newRestaurant = { ...req.body, userId };
        console.log(newRestaurant);
        const restaurant = await Restaurant.create(newRestaurant);
        return res.status(201).json(restaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
}