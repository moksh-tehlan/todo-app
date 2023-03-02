const timeMiddleware = (req, res, next) => {
  const time = Math.floor(Date.now() / 1000);
  req.time = time;
  next();
};

module.exports = timeMiddleware;
