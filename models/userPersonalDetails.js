const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalDetailsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, // Reference to the User model
        ref: 'users',               // Name of the User collection
        required: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: { type: Date },
    phoneNumber: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
}, { timestamps: true });

const PersonalDetailsModel = mongoose.model('PersonalDetails', personalDetailsSchema);

module.exports = PersonalDetailsModel;