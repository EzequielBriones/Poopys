const express = require("express");
const router = express.Router();
const usersModel = require("../models/usersModel");

router.get("/", function (req, res) {
  res.render("login", { layout: "layouts/navless" }); // renderizamos la vista con un layout sin el nav
});

router.post("/", async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  // funcion que lleva el user y la pass a la base de datos
  const data = await usersModel.getUserByUserAndPass(user, pass);

  if (data != undefined) {
    req.session.user = user;
    res.redirect("/adopcion");
  } else {
    res.render("login", { error: true, layout: "layouts/navless" }); // si el user no esta en la db volvemos la login y mostramos un mensaje de error
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(); // cerramos la sesion
  res.render("login", { layout: "layouts/navless" }); // y volvemos al login
});

module.exports = router;
