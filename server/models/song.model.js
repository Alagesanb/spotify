var mongoose = require("mongoose");  
var Schema = mongoose.Schema;  
var SongsSchema = new Schema({ 
    songName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    releaseDate: {
      type: Date
    },
    coverImageURL: { data: Buffer, contentType: String }
   });
   module.exports = mongoose.model('songs', SongsSchema); 