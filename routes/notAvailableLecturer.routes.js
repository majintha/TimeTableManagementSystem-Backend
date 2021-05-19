const router = require('express').Router();
const notAvailableLecturerController = require('../controllers/notAvailableLecturer.controller');

router.post('/nalecturer', notAvailableLecturerController.createNotAvailableLecturer);
router.get('/nalecturer', notAvailableLecturerController.ViewNotAvailableleLecturer);
router.get('/nalecturer', notAvailableLecturerController.viewUnavailabilitylById);
router.get('/nalecturer', notAvailableLecturerController.viewAllLecturers);
router.get('/nalecturer', notAvailableLecturerController.ViewNotAvailableleLecturer);
router.delete('/nalecturer/:id', notAvailableLecturerController.deleteunavailabilitylById);

module.exports = router;
