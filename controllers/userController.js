const User = require('../models/userModel')
const UserDetails = require('../models/userPersonalDetails')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        console.log(err.message)
      }
};

exports.createPersonalDetails = async (req, res) => {
    try {
        const { email } = req.user;
        const body = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        let personalDetails = await UserDetails.findOne({ user: user._id });
        if (personalDetails) {
            return res.status(400).json({ success: false, message: 'Personal details already exist for this user' });
        }

        const personalDetailsData = {
            user: user._id, 
            ...body,
        };

        const newPersonalDetails = new UserDetails(personalDetailsData);
        const savedDetails = await newPersonalDetails.save();

        res.status(201).json({
            success: true,
            message: 'Personal details created successfully',
            data: savedDetails,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

exports.getPersonalDetails = async (req, res) => {
    try {
        const { userId } = req.user;

        const personalDetails = await UserDetails.findOne({ user: userId });
        if (!personalDetails) {
            return res.status(404).json({
                success: false,
                message: 'Personal details not found for this user',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Personal details retrieved successfully',
            data: personalDetails,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};