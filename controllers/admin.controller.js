const models = require("../models");
const Admin = models.Admin;
const bcrypt = require("bcryptjs");
const secret = "4641316895";
const jwt = require("jsonwebtoken");
const { v1: uuidv1 } = require("uuid");

const create = async (req, res) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const data = req.body;
    data["password"] = hash;
    data["userid"] = uuidv1();
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    // let user = await Admin.findOne({ where: { email: req.body.email } });
    // if(!user){

    // }

    await Admin.create(data)
      .then((data) => {
        // res.json("Registration successful");
        res.json({
          status: 200,
          message: "SUCCESS",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "Some error occurred in query",
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      message: "Some error occurred in query",
    });
  }
};

const login = async (req, res) => {
  console.log(req.body)
  try {
    let user = await Admin.findOne({ where: { email: req.body.email } });
    if (user) {
      console.log(user)
      let passwordresult = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log(passwordresult)
      if (passwordresult == true) {
        let token = jwt.sign({ userid: user.userid }, secret, {
          expiresIn: "8h",
        });
        res.json({
          status: 200,
          message: "SUCCESS",
          data: { token, user },
        });
      } else {
        res.json({
          status: 400,
          message: "Wrong Password.. Please Check",
        });
      }
    } else {
      res.json({
        status: 400,
        message: "User Not Found.. Please Check",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      message: "Some error occurred in query",
    });
  }
};
const passwordchange = async (req, res) => {
  try {
    let user = await Admin.findOne({ where: { id: req.body.id } });
    if (user) {
      var salt = bcrypt.genSaltSync(10);
      var data = {
        password: bcrypt.hashSync(req.body.password, salt),
      };
      await Admin.update(data, {
        where: {
          id: req.body.id,
        },
      }).then(() => {
        res.send("Updated Successfully");
      })
        .catch((err) => {
          res.status(404).send({
            message: err.message || "Some error occurred in query.",
          });
        });
    } else {
      res.json({
        status: 400,
        message: "User Not Found.. Please Check",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      message: "Some error occurred in query",
    });
  }
};

const jwtvalidation = async (req, res) => {
  try {
    if (req.body.token) {
      try {
        let result = jwt.verify(req.body.token, secret);
        res.send(result);
      } catch (err) {
        res.json({
          status: 200,
          message: "token expired",
        });
      }
    } else {
      res.json({
        status: 401,
        message: "not authorized",
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      message: "Some error occurred in query",
    });
  }
};

const viewall = async (req, res) => {
  try {
    await Admin.findAll()
      .then((data) => {
        res.json({
          status: 200,
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          message: "Some error occurred in query",
        });
      });
  } catch (err) {
    res.json({
      status: 500,
      message: "Some error occurred in query",
    });
  }
};

const view = async (req, res) => {
  try {
    const data = req.body.userid;

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    await Admin.findAll({ where: { userid: data } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Some error occurred in query.",
        });
      });
  } catch (err) {
    res.status(400).send({
      message: err.message || "Some error occurred in query.",
    });
  }
};

const update = async (req, res) => {
  try {
    const value = req.body;
    const id = req.body.id;
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    await Admin.update(value, {
      where: {
        id: id,
      },
    })
      .then(() => {
        res.send("Updated Successfully");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred in query.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred in query.",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const data = req.body;

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    await Admin.destroy({
      where: data,
    })
      .then(() => {
        res.send("Deleted Successfully");
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred in query.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred in query.",
    });
  }
};

module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  login,
  jwtvalidation,
  passwordchange,
};
