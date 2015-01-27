/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require('passport');
module.exports = {

    /**
     * `AuthController.login()`
     */
    loginProcess: function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if ((err) || (!user)) {
                  return res.objReturn(2,null,'');
                return res.send({
                    message: 'login failed'
                });
            }
            req.logIn(user, function (err) {
                if (err) res.send(err);
                delete user.password;
                req.session.account = user;
                return res.objReturn(0,user,'');
                return res.send({
                    message: 'login successful'
                });
            });
        })(req, res);
    },
    login:function(req,res){
  //      req.locals.layout:'loginLayout',
        res.locals.scripts = ['/js/widgets/jqxbuttons.js','/js/widgets/jqxpasswordinput.js','/js/widgets/jqxinput.js'];
        res.locals.title='會員登入';
        return res.view('Account/login',{message:'',layout:'loginLayout'}  );
    },


    /**
     * `AuthController.logout()`
     */
    logout: function (req, res) {
        // 執行 Passport套件的logOut
        req.logOut();
        // 轉址到登入頁
        res.redirect('account/login');
        res.json({
            message: 'logout successful'
        });
    },
    /**
     * AuthController.loginStatus()
     */
    loginStatus: function (req, res) {
        //#region 判斷是否已驗證登入
        if (req.isAuthenticated())
            res.objReturn(0,req.session.account,'');
        else
            res.objReturn(1,null,'未登入');
        //#endregion
    }

};
