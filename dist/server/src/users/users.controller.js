'use strict';
const mongoose = require('mongoose');
const Users = require('./user.model');

/**
 * GET /users
 *
 * @description
 * list of users
 *
 */
exports.find = function(req, res, next) {
  Users
    .find({})
    .populate('role')
    .exec(function(err, users) {
        if (err) {
          return next(err);
        }
        return res.status(200).json(users);
      });
};

/**
 * GET /users/:id
 *
 * @description
 * Find user by id
 *
 */
exports.get = function(req, res, next) {
  Users
    .findById(req.params.id)
    .populate('role')
    .exec(function(err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(404).send('Not Found');
      }
      return res.status(200).json(user);
    });
};

/**
 * POST /users
 *
 * @description
 * Create a new user
 *
 */
exports.post = function(req, res, next) {
  const { lname, fname, email, role } = req.body;
  const newUser = {
    lname: lname,
    fname: fname,
    email: email,
    role: role,
  };

  Users.create(newUser, function(err, user) {
    if (err) {
      return next(err);
    }
    return res.status(201).json(user);
  });
};

/**
 * PUT /users/:id
 *
 * @description
 * Update a user
 *
 */
exports.put = function(req, res, next) {
  // try to find user
  Users.findById(req.params.id, function(err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(404).send('Not Found');
    }

    // user found and we try to update
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.email = req.body.email;
    user.role = mongoose.Types.ObjectId(req.body.role._id);

    user.save(function(err, uUser) {
      if (err) {
        return next(err);
      }
      
      return res.status(200).json(uUser);
    });
  });
};

/**
 * DELETE /users/:id
 *
 * @description
 * Remove a user
 *
 */
exports.delete = function(req, res, next) {

  const { id } = req.params;
  Users.remove( { _id: id }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(404).send('Not Found');
    }

    return res.status(200).json(user);

  });
};
