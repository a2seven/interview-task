'use strict';

const express = require('express');
const router = express.Router();

const users = require('./users/users.controller');
const roles = require('./roles/roles.controller');

const validationMiddleware = require('../middleware/validation-middleware');

// things ressources
router.get('/api/users', users.find);
router.get('/api/users/:id', users.get);
router.post('/api/users', validationMiddleware.user, users.post);
router.put('/api/users/:id', validationMiddleware.user, users.put);
router.delete('/api/users/:id', users.delete);
router.get('/api/roles', roles.find);

module.exports = router;
