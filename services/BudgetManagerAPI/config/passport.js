const PassportJWT = require('passport-jwt'),
      ExtractJWT = PassportJWT.ExtractJwt,
      Strategy = PassportJWT.Strategy,
      config = require('./index.js'),
      models = require('@BudgetManager/app/setup');

module.exports = (passport) => {
    const parameters = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJWT
    };
}