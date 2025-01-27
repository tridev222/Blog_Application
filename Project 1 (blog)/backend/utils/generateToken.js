const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign(
        { username : user.email, role: user.role, _id: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { username : user.email, role: user.role, _id: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
    );
};

module.exports = { generateAccessToken, generateRefreshToken };
