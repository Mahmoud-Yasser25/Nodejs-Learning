const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();
  console.log(url, method, time);
  // res.send('middleware function test');
  next();
};

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user) {
    if (user === "mahmoud") {
      req.user = { name: "mahmoud", id: 11 };
    } else {
     return res.status(401).send("Unauthorized");
    }
  }
  next();
};


module.exports = {logger,authorize};
