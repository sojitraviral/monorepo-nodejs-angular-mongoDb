var express = require('express');
var userController = require('../src/user/userController');
const router = express.Router();

router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserControllerFn);
router.route('/user/delete/:id').delete(userController.deleteUserControllerFn);


module.exports = router;