const cep = require('cep-promise');

module.exports = {
  create: (_req, res) => res.render("auth/cep"),

  store: async(req, res) => {
    const  inputCep  = req.body.cep;
    // get cep informations
    cep(inputCep)
    .then(cep => {
      return res.render('auth/register', {cep})
    })
    .catch(console.log);
    // push cep object information to register;
    
  }
}
