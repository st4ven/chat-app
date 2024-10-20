import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    // generate a JWT token 
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    // generated JWT is stored as the value of the cookie
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // prevent XSS attacks cross-scite scripting attacks
        sameSite:"strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV != "development"
    });
};

export default generateTokenAndSetCookie;