function authUser(req, res, next) {

  const usuario = typeof(req.session.user) !== 'undefined' ? req.session.user : false;
  if(req.session.user == null) {
    return  res.status(400).render("notFound", {
      message: "Por favor faça o login para ter acesso a essa página."
    });
  }
  next();
}

function authRole(role) {
   return (req, res, next) => {
    if(req.user.role !== role) {
      res.status(401)
      return res.send('not allowed')
    }
    next();
   }
}

module.exports = { authUser, authRole }