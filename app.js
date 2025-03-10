const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
const methodOverride = require('method-override');

const routesIndex = require('./routes/index');
const usersRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const rotasContratar = require("./routes/contratarRoute");
const rotasCliente = require("./routes/clienteRoute");
const rotasConta = require("./routes/contaRoute");
const rotasPrestador = require("./routes/prestadorRoute");
const rotasBusca = require("./routes/buscaRoute");
// admin
const rotasAdmin = require("./routes/adminRoute");
 
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "5ec2048b6d1c8a4fe06ec4fd3d5f31a427c43661e80e438bf35ab03559d38c43",
    resave: true,
    saveUninitialized: true,
  })
);



// admin
app.use("/admin", rotasAdmin);
// used as router to register
app.use("/", loginRouter);
// newsletter
app.use("/", routesIndex)
app.use("/users", usersRouter);
app.use("/contratar", rotasContratar);
app.use("/cadastroCliente", rotasCliente);
app.use("/criarConta", rotasConta);
app.use("/prestador", rotasPrestador);
app.use("/busca", rotasBusca);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
