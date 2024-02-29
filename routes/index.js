const authenticationRoute = require('./authenticationRoute');
const userRoutes = require('./userRoutes');
const emailRoutes = require('./emailRoutes');
const messagingRoutes = require('./messagingRoute');
const ipRoutes = require('./ipRoutes');
const trademarkRoutes = require('./trademarkRoute');

module.exports = {
    authenticationRoute,
    userRoutes,
    emailRoutes,
    messagingRoutes,
    ipRoutes,
    trademarkRoutes
};