var express = require('express');
var router = express.Router();

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "user" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};


/* GET users listing. */
router.get('/', auth, function(req, res, next) {
  res.send("You can only see this after you've logged in.");
});

module.exports = router;
