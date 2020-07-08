
function authUser(req, res, next) {
  const usuario = typeof req.session.user !== "undefined" ? req.session.user : false;
  if (!usuario) {
    return res.status(400).render("notFound", {
      message: "Por favor, faça login para ter acesso a essa página.",
    });
  }
  next();
}


function authRole(req, res, next) {
  const usuario = typeof req.session.user !== "undefined" ? req.session.user : false;
  if (usuario.role !== "ADMIN") {
    console.log('diferente de admin', usuario)
    res.status(401);
    res.render('admin/adminLogin', { message: 'Você não tem permissão para acessar essa página' })
  };
  
  return next();
}
  


module.exports = { authUser, authRole };
