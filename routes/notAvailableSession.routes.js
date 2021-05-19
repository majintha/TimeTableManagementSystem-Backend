const router = require('express').Router();
const notAvailableSessionController = require('../controllers/notAvailableSession.controller');

router.post('/nasession', notAvailableSessionController.createNotAvailableSession);
router.get('/nasession', notAvailableSessionController.ViewNotAvailableSession);
router.get('/nasession', notAvailableSessionController.viewUnavailabilitylById);
router.get('/nasession', notAvailableSessionController.viewAllLecturers);
router.delete('/nasession', notAvailableSessionController.deleteunavailabilitylById);

module.exports = router;