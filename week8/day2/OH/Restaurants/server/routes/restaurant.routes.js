import {Router} from 'express';
import * as restaurantController from '../controllers/restaurant.controller.js';
import authenticate from '../config/jwt.config.js';
const router = Router();

router.post('/restaurants', authenticate, restaurantController.create);
router.get('/restaurants', authenticate, restaurantController.getRestaurants);

export default router;
