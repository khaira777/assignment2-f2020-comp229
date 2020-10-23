let express =require('express');
let router=express.Router();
let mongoose=require('mongoose');

let passport=require('passport');

/*connect to our book model
let Contact =require('../models/contact');*/
let contactController=require('../controllers/contact');
//helper fuction for guard purposers
function requireAuth(req,res,next)
{

//check if the user is logged in
if(!req.isAuthenticated())
{

return res.redirect('/login');

}
next();
}

/*get route for the book list page--READ operation*/
router.get('/',contactController.displayContactList);
let express = require('express');
//const { InsufficientStorage } = require('http-errors');
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
router.post('/update/:id', requireAuth, contactController.processUpadatePage);

/** GET to perform Deletion - delete Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
/*displaying update page*/
router.get('/update/:id', requireAuth,contactController.displayUpdatePage);


/*processing of update */
router.post('/update/:id', requireAuth,contactController.processUpadatePage);


/*get to perform deletion-delete operaion*/
router.get('/delete/:id', requireAuth,contactController.performDelete);


module.exports=router;
