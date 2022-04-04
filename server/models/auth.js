const StatusCodes = require("http-status-codes");
module.exports = {
    requireAuth: (req, res, next) => {
        if (!req.user)
            next({
                statusCode: StatusCodes.UNAUTHORIZED,
                message: "Unauthorized",
            });
        else next();
    },
};
