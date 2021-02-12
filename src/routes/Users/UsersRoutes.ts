import {Router} from 'express';

import {upload} from './../../utils';
import {UsersController} from './../../controllers';

const router = Router();

router.get('/', UsersController.index);
router.post('/', upload.single('image'), UsersController.store);
router.get('/:id', UsersController.show);
router.put('/:id', upload.single('image'), UsersController.update);
router.delete('/:id', UsersController.destroy);

export default router;
