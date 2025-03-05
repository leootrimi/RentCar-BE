const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (err) {
        console.log(err.message)
      }
};

exports.saveNewUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required.' });
        }

        const newUser = new User({
            name,
            email,
            password,
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User created successfully.',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email,
                createdAt: savedUser.createdAt,
                updatedAt: savedUser.updatedAt
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to create user. ' + err.message });
    }
};
