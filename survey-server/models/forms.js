const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new mongoose.Schema({
    formName: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    formFields: [
        {
            enterFieldName: {
                type: String,
                required: true
            },
            enterType: {
                type: String,
                required: true,
                enum: ['text', 'email', 'number']
            }
        }
    ],
    formData: [
        {
            type: String
        }

    ]
}, { timestamps: true });


module.exports = mongoose.model("Form", formSchema);