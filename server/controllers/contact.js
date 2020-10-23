let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(Contactlist);

            res.render('contact/list',
                {
                    title: 'Business Contacts List',
                    ContactList: contactList,
                    displayName: req.user ? req.user.displayName : ''
                });
        }
    });
}
/*
module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', { title: 'Add Book',
                    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "pub": req.body.published
    });
    Book.create(newBook, (err, Book) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the book list
            res.redirect("/book-list");
        }
    })
}
*/
module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToUpdate) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contact/update', {title: 'Update Contact', contact: contactToUpdate,
                    displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id
    
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    })
}