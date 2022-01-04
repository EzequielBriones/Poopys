var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
//requerimos express-session para utilizar variables de sesión, las que serán necesarias
//a la hora de chequear si un usuario está autorizado para acceder a la base de datos
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");

require("dotenv").config(); // cargamos los datos de variables de ambiente
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

////enlazamos el enrutador a los archivos login y adopciones js
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const adopcionesRouter = require("./routes/adopciones");
const adopcionRouter = require("./routes/adopcion");
const contactRouter = require("./routes/contact");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//// configuramos express-session copiando la sintaxis de la documentación
//ojo con la posición en que declaran este código. No puede ir antes de const app = express()
app.use(
  session({
    secret: "#0p3n_s3s4m3@1234567890", //código de seguridad creado por nosotros
    resave: false,
    saveUninitialized: true,
  })
);

//creamos el middleware para verificar los intentos de igreso a la ruta "adopciones",
//Aunque tratemos de entrar directamente, siempre se correrá antes el middleware
//y solo podremos acceder si req.session.user (que se setea con un valor en caso de login positivo)
//luego, si salimos de "adopciones", podremos volver si escribimos la ruta, siempre que la sesión
//continúe activa

secured = async (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/adopcion", secured, adopcionRouter);
app.use("/adopciones", adopcionesRouter);
app.use("/contact", contactRouter);
// catch all route 404 esto toma todas las rutas que se inserten en la barra de direcciones y que no estén
//previamente asignadas a algún controlador. Esta ruta siempre debe ir en últimno lugar, para darle a las
//rutas programadas la posibilidad de ejecutarse cuando sean llamadas.
// app.use("*", (req, res) => {
//   res.send("404 Error. Not found...😪 ");
// });

module.exports = app;
