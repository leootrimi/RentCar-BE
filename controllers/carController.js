const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price_per_day: 50 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019, price_per_day: 45 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price_per_day: 70 },
  ];

  exports.getAllCars = (req, res) => {
    res.status(200).json(cars);
  };