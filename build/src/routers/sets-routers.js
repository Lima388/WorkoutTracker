import { Router } from 'express';
import { listAll } from '../controllers/sets-controller.js';
const router = Router();
router.get('/sets', listAll);
export default router;
//# sourceMappingURL=sets-routers.js.map