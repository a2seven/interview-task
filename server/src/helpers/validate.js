'use strict';

const Validator = require('validatorjs');
const Users = require('../users/user.model');

const onlyLetter = /^[a-zA-Z]+$/;
Validator.register('fname', (value) => {
	return onlyLetter.test(value);
}, 'First name can not contains numbers or symbols');
Validator.register('lname', (value) => {
	return onlyLetter.test(value);
}, 'Last name can not contains numbers or symbols');

Validator.registerAsync('exist', (value,  attribute, req, passes) => {
	if (!attribute) throw new Error('Specify Requirements i.e fieldName: exist:table,column');
	//split table and column
	let attArr = attribute.split(",");
	if (attArr.length !== 3) throw new Error(`Invalid format for validation rule on ${attribute}`);

	//assign array index 0 and 1 to table and column respectively
	const { 1: column, 2: id } = attArr;
	//define custom error message
	let msg = id === 'undefined' ? 'We can not create user, because email has already been taken' : `User was not updated! «${column}» has already been taken`;
	//check if incoming value already exists in the database

	const foundConditions = id !== 'undefined' ? {email: value, _id: { $ne: id } } : { email: value };
	Users
		.find(foundConditions)
		.exec((err, users) => {
			if (users && users.length > 0) {
				passes(false, msg); // return false if value exists
			}
			passes();
		});
});

// check if Art manager exists in database
Validator.registerAsync('onlyOneArtManger', (value,  attribute, req, passes) => {
	const msg = "User with Art manager Role already exists";
	if (value.name !== 'Art manager') {
		passes();
	} else {
		const foundConditions = attribute !== 'undefined' ? { role: value._id, _id: { $ne: attribute } } : { role: value._id };
		Users
			.find(foundConditions)
			.exec((err, users) => {
				if (users && users.length > 0) {
					passes(false, msg); // return false if value exists
				}
				passes();
			});
	}
});

const validator = (body, rules, customMessages, callback) => {
	const validation = new Validator(body, rules, customMessages);
	validation.passes(() => callback(null, true));
	validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;