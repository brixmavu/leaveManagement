var express = require('express');
var router = express.Router();

// Login endpoint
router.get('/login', function (req, res) {
    if (!req.query.username || !req.query.password) {
      res.send('login failed');    
    } else if(req.query.username === "amy" || req.query.password === "amyspassword") {
      req.session.user = "amy";
      req.session.admin = true;
      res.send("login success!");
    }
  });
   
  // Logout endpoint
  router.get('/logout', function (req, res) {
    req.session.destroy();
    res.send("logout success!");
  });

module.exports = router;
