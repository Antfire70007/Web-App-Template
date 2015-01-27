// api/policies/authenticated.js

module.exports = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } else {
        sails.log(req);
        return res.redirect ('Account/login');
        return res.send(403, { message: 'Not Authorized' });
    }
};
