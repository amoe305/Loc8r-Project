var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations Pages */
router.get('/', ctrlLocations.homelist);
router.get('/mylocationlist', ctrlLocations.myLocationList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/mylocation', ctrlLocations.myLocationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
