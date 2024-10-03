import {Router} from 'express';
import * as restaurantController from '../controllers/restaurant.controller.js';
import authenticate from '../config/jwt.config.js';
const router = Router();

router.post('/create_restaurant', authenticate, restaurantController.create);
// router.get('/get_restaurants', restaurantController.getRestaurants);

export default router;
