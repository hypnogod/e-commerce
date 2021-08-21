import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
    },
    process.env.ACCESS_TOKEN_KEY,
    {
      expiresIn: "1d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decode) => {
      if (err) {
        res.status(401).send({
          message: "Invalid Token",
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({
      message: "No Token",
    });
  }
};

