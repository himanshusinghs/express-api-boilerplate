"use strict";

const student = require('../../../app/http/controllers/v1/student');
const isAuthenticated = require('../../../app/http/middlewares/v1/isAuthenticated');

module.exports = [
    {path: '/student/:email/profile', method: 'PUT',  handlers: [isAuthenticated('student'), student.updateDetails]},
    {path: '/student/:email/password', method: 'PUT',  handlers: [isAuthenticated('student'), student.changePassword]},
    {path: '/student/:email/reset-password', method: 'PUT',  handlers: [isAuthenticated('student'), student.resetPassword]}
];