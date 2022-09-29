import jwt from 'jsonwebtoken';

// middleware to handle requests to allow app actions
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // check if token is from google auth
    const isGoogleAuth = token.length >= 500;

    let decodedData;

    // if token is custom auth
    if (token && !isGoogleAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      // if google auth
      decodedData = jwt.decode(token);

      // google id that differentiates every user
      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
