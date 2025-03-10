const mongoose = require('mongoose');
const { use } = require('../routes/carRoutes');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;