const router = require('express').Router();
const notAvailableBatchController = require('../controllers/notAvailableBatch.controller');

router.post('/nabatch', notAvailableBatchController.createNotAvailableBatch);
router.get('/nabatch', notAvailableBatchController.ViewNotAvailableleBatch);
router.get('/nabatch', notAvailableBatchController.viewUnavailabilitylById);
router.get('/nabatch', notAvailableBatchController.viewAllLecturers);
router.delete('/nabatch/:id', notAvailableBatchController.deleteunavailabilitylById);


module.exports = router;