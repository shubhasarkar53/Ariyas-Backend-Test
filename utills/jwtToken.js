// Get jwttoken and store into cookie

const sendToken = (user, statusCode, res) => {

    const token = user.generateJWTToken();
  
    const options = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
      httpOnly: true,
      secure: true, // Ensure this is true for production
      sameSite: 'None', // This is necessary for cross-domain cookies
      path: '/',
    };
  
    res.status(statusCode).cookie("token", token , options).json({
      success: true,
      user,
      token
    });
  
  }; 
  
  module.exports = sendToken;
  