
const router = require('express').Router();
const postController = require('../controllers/postController')

router.get('/', postController.all);

router.post('/', postController.store);

router.route('/:id')
    .get(postController.show)
    .patch(postController.update)
    .delete(postController.destroy);


module.exports = router;