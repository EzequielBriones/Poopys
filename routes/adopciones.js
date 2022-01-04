const express = require("express");
const router = express.Router();
const dogsModel = require("../models/dogsModel");
const cloudinary = require("cloudinary").v2;

router.get("/", async (req, res) => {
  const data = await dogsModel.getDogs();
  const dogs = data.map((row) => {
    // nos permite mostrar las imagenes de cloudinary en el frontend
    const imageURL = cloudinary.url(row.img, {
      width: 400,
      height: 400,
      crop: "fill",
    });
    return { ...row, imageURL }; // retorna los datos de la base de datos al igual que la imagen de cloudinary
  });
  res.render("adopciones", { dogs });
});

module.exports = router;
