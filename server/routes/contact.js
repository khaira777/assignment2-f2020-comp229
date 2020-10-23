let express = require('express');
const { InsufficientStorage } = require('http-errors');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

/*// connect to our Books Model
let Contact = require('../models/contact');*/

let contactController = require('../controllers/contact');

//helper function for guard purposes
function requireAuth(req, res, next) {
    //check if user is logged in
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

/** GET Route for the Book List page - Read OPeration */
router.get('/', contactController.displayContactList);

/*// GET Route for displaying the Add page - create Operation 
router.get('/add', requireAuth, contactController.displayUpdatePage);

// POST Route for processing the Add page - create Operation 
router.post('/add', requireAuth, contactController.processAddPage);*/

/** GET Route for displaying the Edit page - update Operation */
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

/** POST Route for processing the Edit page - update Operation */
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/** GET to perform Deletion - delete Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
