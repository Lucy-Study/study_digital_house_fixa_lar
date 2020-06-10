var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const methodOverride = require('method-override');
const session = require('express-session');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var rotasContratar = require("./routes/contratarRoute");
var rotasCliente = require("./routes/clienteRoute");
var rotasConta = require("./routes/contaRoute");
var rotasPrestador = require("./routes/prestadorRoute");
var rotasBusca = require("./routes/buscaRoute");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "5ec2048b6d1c8a4fe06ec4fd3d5f31a427c43661e80e438bf35ab03559d38c43",
    resave: true,
    saveUninitialized: true
  })
);
app.use(cookieParser());

app.use("/", indexRouter);
// used as router to register
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
