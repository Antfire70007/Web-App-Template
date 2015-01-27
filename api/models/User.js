/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
beforeCreate:function(attrs,next){
        var bcrypt = require('bcrypt');
        bcrypt.genSalt(10,function(err,salt){
            if(err)
            {
                return next(err);
            }

            bcrypt.hash(attrs.password,salt,function(err,hash){
                if(err) return next(err);
                attrs.password = hash;
                next(null,attrs);

            });

        });

    },
 connection:'localMysql',
 autoPK: false,        // don't try and add a unique ID; we already have one
    autoCreatedAt: false, // don't try and add a createdAt timestamp
    autoUpdatedAt: false, // don't try and add a updatedAt timestamp
  attributes: {
	  id:{
          type:'integer',
          autoIncrement: true,
            primaryKey: true

      },
	  account:{type:'string',
               size:30,
            unique:true,
               required: true
              },
	  password:
        {
            type:'string',
            size:100,
            required:true
               },
      email:{
        type:'email',
        size:100,
        required:true,
        unique:true

      },
      active:{
          type:'boolean',
          defaultsTo:'0'},
      level:{
          type:'integer',
          defaultsTo:0},
      createtime:{type:'datetime',
          defaultsTo:new Date().toString()},
      updatetime:{type:'datetime',
          defaultsTo:new Date().toString()},
      toJSON:function(){
        var obj = this.toObject();
        if(obj.level>0)
            return ;
        delete obj.password;
        delete obj.active;
        delete obj.level;
        return obj;
      }


  }
};

