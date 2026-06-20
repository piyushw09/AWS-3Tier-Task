const express = require("express");

const router = express.Router();

const User = require("../models/User");

const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (!user) {

            return res.status(401).json({
                message: "Invalid credentials"
            });

        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            message: "Login successful",
            token,
            user
        });

    } catch (error) {

        console.error("LOGIN ERROR:", error);

        res.status(500).json({
            message: error.message
        });

    }

});

router.get("/", authMiddleware, async (req, res) => {
    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;