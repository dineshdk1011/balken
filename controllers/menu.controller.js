const models = require("../models");
const Menu = models.Menus;
const { v1: uuidv1 } = require("uuid");

const create = async (req, res) => {
  const data = req.body;
  data["foodid"] = uuidv1();
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Menu.create(data)
    .then((data) => {
      res.json({
        status: 200,
        message: "SUCCESS",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: 400,
        message: "Some error occurred in query",
      });
    });
};

const viewall = async (req, res) => {
  await Menu.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const view_by_category = async (req, res) => {
  const data = req.body.category;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Menu.findAll({ where: { category: data } })
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
  const data = req.body.foodid;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Menu.findAll({ where: { foodid: data } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const update = async (req, res) => {
  const value = req.body;
  const id = req.body.id;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Menu.update(value, {
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
};

const destroy = async (req, res) => {
  const data = req.body.testtid;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  await Menu.destroy({ where: { id: data } })
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
  view_by_category,
  view,
  update,
  destroy,
};
