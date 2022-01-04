const express = require("express");
const router = express.Router();
const dogsModel = require("../models/dogsModel");
const util = require("util"); //con util "promisificaremos" el método de subida de archivos
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload); //incorporamos la funcionalidad asincrónica al método upload
const destroy = util.promisify(cloudinary.uploader.destroy); //incorporamos la funcionalidad asincrónica al método destroy

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
  res.render("adopcion", { dogs });
});

router.get("/addDog", (req, res) => {
  res.render("addDog");
});

// Ruta para agregar un perro nuevo
router.post("/addDog", async (req, res) => {
  let archivo = req.files.archivo;
  const img_id = (await uploader(archivo.tempFilePath)).public_id; // crea una ruta temporal para el archivo

  // Los "..." son un spread operator que traen todos los datos del "req.body" como un refactoreo
  await dogsModel.addDog({ ...req.body, img: img_id });
  res.redirect("/adopcion");
});

// ruta para modificar o borrar a los perros de front
router.get("/editDogs/:id", async (req, res) => {
  const row = await dogsModel.getDog(req.params.id);
  const dog = {
    id: row[0].id,
    nombre: row[0].nombre,
    edad: row[0].edad,
    sexo: row[0].sexo,
    tamaño: row[0].tamaño,
    raza: row[0].raza,
    descripción: row[0].descripción,
    img: row[0].img,
  };
  res.render("editDogs", { dog });
});

// ruta para modificar a un perro existente
router.post("/editdog", async (req, res) => {
  let img_id = null;
  if (!req.files) {
    img_id = req.body.previmg; // esta la variable nos permite volver a mostrar la imagen que ya esta mostrandose en caso de no cambiarla
  } else {
    row = await dogsModel.getDog(req.body.id);
    await destroy(row[0].img); // utilizamos el método destroy para borrarla
    archivo = req.files.archivo; // declaramos al archivo ingresado en la variable
    img_id = (await uploader(archivo.tempFilePath)).public_id; // y subimos la variable a cloudinary
  }
  const data = {
    id: req.body.id,
    nombre: req.body.nombre,
    edad: req.body.edad,
    sexo: req.body.sexo,
    tamaño: req.body.tamaño,
    raza: req.body.raza,
    descripción: req.body.descripción,
    img: img_id,
  };
  await dogsModel.changeDog(data, data.id);
  res.redirect("/adopcion");
});

/*Ruta para eliminar, recibe parámetro id*/
router.get("/deletedog/:id", async (req, res) => {
  //traemos el registro porque necesitamos el campo img, que contiene el id a través del cual
  // identificamos las imágenes en Cloudinary
  row = await dogsModel.getDog(req.params.id);
  await destroy(row[0].img); // y utilizamos el método destroy
  await dogsModel.deleteDog(req.params.id);
  res.redirect("/adopcion");
});
module.exports = router;
