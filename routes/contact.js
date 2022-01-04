const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", function (req, res) {
  res.render("contact");
});

/* POST maneja la info que llega desde el form*/
router.post("/", async (req, res) => {
  const name = req.body.name;
  const subject = req.body.subject;
  const email = req.body.email;
  const message = req.body.message;

  const emailMsg = {
    to: "poopys@poopys.com",
    from: email,
    subject: "Mensaje desde Poopys",
    html: `${name} se comunicó a través del formulario de contacto. Este es su asunto: "${subject}". Este su mensaje: "${message}"
    `,
  };

  let transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transport.sendMail(emailMsg, (err) => {
    let message = null;
    if (err) {
      message = "Mensaje no enviado. Intenta nuevamente";
    } else {
      message = "Su mensaje fue enviado correctamente";
    }
    res.render("contact", { message });
  });
});
module.exports = router;
