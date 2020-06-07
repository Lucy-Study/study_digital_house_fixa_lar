function authUser(req, res, next) {
  console.log(req.user);
  if(req.user == null) {
    
    return  res.status(400).render("notFound", {
      message: "Por favor faço o cadastro para ter acesso a essa página."
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