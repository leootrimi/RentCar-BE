const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const carDetailsSchema = new Schema({
    carName: { type: String },
    imageURL: { type: String },
    engineHP: { type: Number },
    transmission: { type: String },
    carSize: { type: String },
    seatNumber: { type: Number },
    baggage: { type: String },
    petrol: { type: String },
    price: { type: Number },
    discount: { type: Number },
    priceAfterDiscount: { type: Number },
    numberOfDays: { type: Number },
    totalPrice: { type: Number }
}, { timestamps: true });

const CarDetailsModel = mongoose.model('CarDetails', carDetailsSchema);

module.exports = CarDetailsModel;