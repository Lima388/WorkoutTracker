import { Router } from 'express';
import { listAll, create, update } from '../controllers/sets-controller.js';
import { setSchemaValidation } from '../middlewares/setSchemaValidation.js';
const router = Router();
router.get('/sets', listAll);
router.post('/sets', setSchemaValidation, create);
router.put('/sets', setSchemaValidation, update);
export default router;
//# sourceMappingURL=sets-router.js.map