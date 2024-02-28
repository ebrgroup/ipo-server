const authenticationRoute = require('./authenticationRoute');
const userRoutes = require('./userRoutes');
const emailRoutes = require('./emailRoutes');
const messagingRoutes = require('./messagingRoute');
const ipRoutes = require('./ipRoutes');

module.exports = {
    authenticationRoute,
    userRoutes,
    emailRoutes,
    messagingRoutes,
    ipRoutes
};