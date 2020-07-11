'use strict';

const validator = require('../src/helpers/validate');

const user = (req, res, next) => {
  const validationRule = {
    "email": `required|email|exist:Users,email,${req.body._id}`,
    "lname": "required|lname",
    "fname": "required|fname",
    "role": `required|onlyOneArtManger:${req.body._id}`
  }
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(400)
        .send({
            success: false,
            message: 'Validation failed',
            data: err
        });
    } else {
        next();
    }
  });
}

module.exports = { 
  user
}