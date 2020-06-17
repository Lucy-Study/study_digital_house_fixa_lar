const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const cors = require('cors');
require('dotenv').config();

const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const rotasContratar = require("./routes/contratarRoute");
const rotasCliente = require("./routes/clienteRoute");
const rotasConta = require("./routes/contaRoute");
const rotasPrestador = require("./routes/prestadorRoute");
const rotasBusca = require("./routes/buscaRoute");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
)
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// used as router to register
app.use("/users", registerRouter);

app.use("/", loginRouter);
app.use("/contratar", rotasContratar);
app.use("/cadastroCliente", rotasCliente);
app.use("/criarConta", rotasConta);
app.use("/cadastroPrestador", rotasPrestador);
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
