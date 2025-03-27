const CarDetails = require('../models/carDetailsModel');

exports.createCar = async (req, res) => {
  try {
    const { 
      carName,
      carType, 
      imageURL, 
      engineHP, 
      transmission, 
      carSize, 
      seatNumber, 
      baggage, 
      petrol, 
      price, 
      discount, 
      numberOfDays 
    } = req.body;

    if (!carName || !price || !numberOfDays) {
      return res.status(400).json({ error: 'carName, price, and numberOfDays are required' });
    }

    const priceAfterDiscount = price - (price * (discount || 0) / 100);
    const totalPrice = priceAfterDiscount * numberOfDays;

    const newCar = await CarDetails.create({
      carName,
      carType,
      imageURL,
      engineHP,
      transmission,
      carSize,
      seatNumber,
      baggage,
      petrol,
      price,
      discount,
      priceAfterDiscount,
      numberOfDays,
      totalPrice
    });

    res.status(201).json({ message: 'Car details saved successfully', car: newCar });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create car: ' + err.message });
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await CarDetails.find();
    res.status(200).json(cars);
  } catch (err) {
    console.log(err.message);
  }
};