import express from 'express';

import {login, Register} from '../controllers/userController.js';

const router = express.Router();

router.post("/login",login);
router.post("/register",Register);


export default router;