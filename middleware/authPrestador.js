module.exports = (req, res, next) => {
    if(!req.session.prestador) {
        return res.redirect("/");
    }

    res.locals.prestador_session = req.session.prestador;
    next();
}