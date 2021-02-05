var mongoose = require("mongoose");  
var Schema = mongoose.Schema;  
  
var UsersSchema = new Schema({      
 name: { type: String   },       
 password: { type: String   },   
},{ versionKey: false }); 

module.exports= mongoose.model('users', UsersSchema);  