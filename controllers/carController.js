const CarDetails = require("../models/carDetailsModel");
const cloudinary = require("../config/cloudinaryConfig");

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
      numberOfDays,
    } = req.body;

    if (!carName || !price || !numberOfDays) {
      return res
        .status(400)
        .json({ error: "carName, price, and numberOfDays are required" });
    }

    let uploadedImageURL = imageURL;
    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "cars",
          use_filename: true,
          unique_filename: false,
        });
        uploadedImageURL = result.secure_url;
        fs.unlinkSync(req.file.path);
      } catch (uploadError) {
        throw new Error("Cloudinary upload failed: " + uploadError.message);
      }
    }

    const priceAfterDiscount = price - (price * (discount || 0)) / 100;
    const totalPrice = priceAfterDiscount * numberOfDays;

    const newCar = await CarDetails.create({
      carName,
      carType,
      imageURL: uploadedImageURL,
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
      totalPrice,
    });

    res
      .status(201)
      .json({ message: "Car details saved successfully", car: newCar });
  } catch (err) {
    res.status(500).json({ error: "Failed to create car: " + err.message });
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
