const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new mongoose.Schema({
    formId: {
        type: Schema.Types.ObjectId,
        ref: "Form",
        required: true
    },
    formData: {
        type: String
    }

}, { timestamps: true });


module.exports = mongoose.model("Register", registerSchema);