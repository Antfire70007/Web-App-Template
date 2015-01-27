/********************************************
 * 1. Return Request Results
 *
 * Usage :  res.objReturn()
 *          res.objReturn(0,{},'Success')
 *
 *
 *
 ********************************************/

module.exports = function objReturn(returnCode,returnData,returnMessage){
 // Get access to `req`, `res`, & `sails`
  var req = this.req;
  var res = this.res;
  var sails = req._sails;
 // Set status code
  res.status(200);
  sails.log(returnData);


    var objReturn = {
        ReturnValue:returnCode,
        ReturnData:returnData||null,
        ReturnMessage:returnMessage||''
    };

  // If appropriate, serve data as JSON(P)
  if (req.wantsJSON) {
    return res.json(objReturn);
  }

  // If second argument is a string, we take that to mean it refers to a view.
  // If it was omitted, use an empty object (`{}`)
  options = (typeof options === 'string') ? { view: options } : options || {};

  // If a view was provided in options, serve it.
  // Otherwise try to guess an appropriate view, or if that doesn't
  // work, just send JSON.
  if (options.view) {
    return res.view(options.view, { data: objReturn });
  }

  // If no second argument provided, try to serve the implied view,
  // but fall back to sending JSON(P) if no view can be inferred.
  else return res.guessView({ data: objReturn }, function couldNotGuessView () {
    return res.json(objReturn);
  });
};
