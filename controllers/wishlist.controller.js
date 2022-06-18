const models = require("../models");
const Wishlist = models.wishlist;
const { v1: uuidv1 } = require("uuid");

const create = async (req, res) => {
  const data = req.body;
  data["wishlistid"] = uuidv1();
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Wishlist.create(data)
    .then((data) => {
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
};
const viewall = async (req, res) => {
  await Wishlist.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};
const view = async (req, res) => {
  const data = req.body.userid;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Wishlist.findAll({ where: { userid: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};
const destroy = async (req, res) => {
  const data = req.body.wishlistid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  await Wishlist.destroy({ where: { wishlistid: data } })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

module.exports = {
  create,
  viewall,
  destroy,
  view,
};
