import jwt from "jsonwebtoken";

const startupAuthMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized Login Again",
    });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    //console.log(token_decode);
    req.body.startupId = token_decode.id;
    console.log(req.body);

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export default startupAuthMiddleware;
