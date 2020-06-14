var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var user = require("./user");

//create user
router.post("/", function(req, res) {
  user.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.pasword
    },
    function(err, user) {
      if (err) {
        return res.status(500).send("failed to create a user");
      }
      res.status(200).send(user);
    }
  );
});

//get users
router.get("/", function(req, res) {
  user.find({}, function(err, user) {
    if (err) {
      return res.status(500).send("failed to find a user");
    }
    res.status(200).send(user);
  });
});

//edit user profile
router.put("/:id", function(req, res) {
  user.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
    if (err) {
      return res.status(500).send("failed to edit user profile");
    }
    res.status(200).send(user);
  });
});

//delete user
router.delete("/:id", function(req, res) {
  user.findByIdAndRemove(req.params.id, function(err, user) {
    if ((err, user)) {
      if (err) {
        return res.status(500).send("failed to delete a user");
      }
      res.status(200).send(user);
    }
  });
});

module.exports = router;
