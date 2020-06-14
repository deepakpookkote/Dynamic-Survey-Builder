const express = require('express');
const router = express.Router();

const { isSignedIn, isAuthenticated } = require('../controllers/auth');
const { createForm, getAllForms } = require('../controllers/forms');
const { getUserById } = require('../controllers/user');

router.param('userId', getUserById);

const Form = require('../models/forms');
const Register = require('../models/registration');

router.post("/create-form/:userId", isSignedIn, isAuthenticated, createForm)

router.get('/get-form', async(req, res) => {
    const formId = req.query.id;
    const reqForm = await Form.findById(formId);

    res.json(reqForm);

});

router.get('/form/:userId/all', isSignedIn, isAuthenticated, getAllForms);


router.post('/form/register', async(req, res) => {
    const formData = new Register(req.body)
    try {
        await formData.save();
        res.status(200).json({ status: 'success', message: "Registration success" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: "Unable to Registration event" });
    }
})


router.get('/form/register/:userId/all', async(req, res) => {
    try {
        const registrations = await Register.find()
        if(!registrations) {
            res.status(400).json({ status: 'error', message: "No registrations found" });
        }
        res.status(200).json({ message: 'success', registrations: registrations });

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: "Unable to fetch registrations" });
    }
})

module.exports = router;