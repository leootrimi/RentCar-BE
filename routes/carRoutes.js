const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const upload = require("../middleware/upload");

router.post("/cars", upload.single("image"), carController.createCar);
router.get("/cars", carController.getAllCars);

module.exports = router;
