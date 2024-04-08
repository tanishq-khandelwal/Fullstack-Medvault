import { Router } from 'express';
import { contactUs } from '../controllers/email.controllers.js';

const router = Router();

// {{URL}}/api/v1/
router.route('/email/:id').post(contactUs);

export default router;