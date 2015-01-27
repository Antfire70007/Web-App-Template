/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {



  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
        return res.view('Home/index');
  //  return res.view('Home/index',{message:'',layout:'layout' );
  }
};

