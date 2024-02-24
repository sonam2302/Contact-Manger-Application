const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  let token = req.headers.authorization;
  let result = jwt.verify(token, "this is my secret for authentication api", (err, decode) => {
    return decode !== undefined ? decode : err;
  });

  if (!(result instanceof Error)) {
    next();
  } else {
    res.status(401).send({ message: "you are not authorized to access this" });
  }
}

module.exports = { verifyToken };


