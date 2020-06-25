const { body, validationResult } = require('express-validator');


const userValidationRules = () => {
  return [
    //username must be an email
    body('name')
      .not()
      .isEmpty()
      .withMessage('Preenchimento do Nome obrigatório'),
    // email rules
    body('email', 'Preenchimento do Email obrigatório')
      .isEmail(),
    // cpf obrigatorio
    body('cpf')
      .not()
      .isEmpty()
      .withMessage('preenchimento do cpf obrigatório'),
    // password must be at least 5 chars logn
    body('password','Por favor verifique: tamanho=5 e se são iguais')
      .isLength({ min: 5})
      .custom((value, {req, loc, path})=>{
        if(value !== req.body.confirm_password) {
          throw new Error('Use as mesmas senhas nos dois campos por favor.')
        } else {
          return value;
        }
      }),
  ]
}

const validate = (req, res, next) => {
  
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    return `${msg}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    // return errors to view
    return res.render('auth/register' , { errors: result.array() });
  }

  return next();
  
};

module.exports = {
  userValidationRules,
  validate,
}
// Response will contain something like
    // { errors: [ "body[password]: must be at least 10 chars long" ] }