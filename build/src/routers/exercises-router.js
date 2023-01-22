import { Router } from 'express';
import { listAll } from '../controllers/exercises-controller.js';
const router = Router();
router.get('/exercises', listAll);
export default router;
//# sourceMappingURL=exercises-router.js.map