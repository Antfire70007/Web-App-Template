// AccountService.js - in api/Services
exports.login = function(options){
    var passport = require('passport'),
        LocalStrategy  = require('passport-local').Strategy,
        bcrypt = require('bcrypt');
    passport.use(new Localstrategy(
        {usernameField :'account',
        passwordField :'password'},
        function(account,password,done)
        {
            User.findOne({account:account},function(err,account){
                if(err){return done(err);}
                if(!account){return done(null,false,{message:'Unknown user'+account});}
                 bcrypt.compare(password, account.password, function(err, res) {
                if(!res) return done(null, false, {message: 'Invalid Password'});
                return done(null, user);
            });


            });
        }
    ));

}
