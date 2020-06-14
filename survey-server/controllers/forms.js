
const Form = require('../models/forms');


exports.createForm = async (req, res) => {
    const form = new Form(req.body);
    try {
        const result = await form.save();
        res.status(200).json({ status: 'success', message: "Document creation success", id: result.id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: "Unable to create document" });
    }
};

exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find()
        if(!forms) {
            res.status(400).json({ status: 'error', message: "No Forms found" });
        }
        res.status(200).json({ message: 'success', forms: forms });

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 'error', message: "Unable to fetch forms" });
    }
};

