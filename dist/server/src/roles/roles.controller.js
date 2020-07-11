'use strict';

var Roles = require('./roles.model');

/**
 * GET /users
 *
 * @description
 * list of users
 *
 */
exports.find = function(req, res, next) {
  Roles
    .find(function(err, users) {
			if (err) {
				return next(err);
			}
			return res.status(200).json(users);
		})
};
