const models = require("../models");
const Enquiry = models.Enquiry;
const { v1: uuidv1 } = require("uuid");
const nodemailer = require('nodemailer')

var smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'noreply@cmcacademy.ac.in',
    pass: 'welcome@2022' // naturally, replace both with your real credentials or an application-specific password
  }
});

const create = async (req, res) => {
  const data = req.body;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Enquiry.create(data)
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
  await Enquiry.findAll()
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
  const data = req.body.id;
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  await Enquiry.findAll({ where: { id: data } })
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

  await Enquiry.update(value, {
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
  const data = req.body.id;

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  await Enquiry.destroy({ where: { id: data } })
    .then(() => {
      res.send("Deleted Successfully");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred in query.",
      });
    });
};

const mail = async (req, res) => {
  try {
    const { msg,email } = req.body
    var html = `${msg}`
    const mailOptions = {
      from: 'noreply@cmcacademy.ac.in',
      to: email,
      subject: 'Replay',
      text: "Replay from Balken",
      html: html
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.send(true)
      }
    });

  } catch (err) {
    res.status(500)
  }
}
module.exports = {
  create,
  viewall,
  view,
  update,
  destroy,
  mail
};
