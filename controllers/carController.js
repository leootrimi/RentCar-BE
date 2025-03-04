const Car = require('../models/carModel');

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.getAll();
    res.status(200).json(cars);
  } catch (err) {
    throw new Error('Failed to fetch cars: ' + err.message);
  }
};

exports.getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.getById(id);
    if (!car) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json(car);
  } catch (err) {
    throw new Error('Failed to fetch car: ' + err.message);
  }
};

exports.createCar = async (req, res) => {
  try {
    const { make, model, year, price_per_day } = req.body;
    if (!make || !model || !price_per_day) {
      return res.status(400).json({ error: 'Make, model, and price_per_day are required' });
    }
    const newCar = await Car.create({ make, model, year, price_per_day });
    res.status(201).json(newCar);
  } catch (err) {
    throw new Error('Failed to create car: ' + err.message);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { make, model, year, price_per_day } = req.body;
    const updatedCar = await Car.update(id, { make, model, year, price_per_day });
    if (!updatedCar) return res.status(404).json({ error: 'Car not found' });
    res.status(200).json(updatedCar);
  } catch (err) {
    throw new Error('Failed to update car: ' + err.message);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Car.delete(id);
    if (!deleted) return res.status(404).json({ error: 'Car not found' });
    res.status(204).send();
  } catch (err) {
    throw new Error('Failed to delete car: ' + err.message);
  }
};