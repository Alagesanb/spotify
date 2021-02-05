var mongo = require("mongoose");  
var Schema = mongo.Schema;  
var ArtistSchema = new Schema({ 
    atristName: {
      type: String,
      required: true
    },
    atristDob: {
      type: Date
    },
    atristBio: {
      type: String,
      required: true
    }});
module.exports = mongo.model('artists', ArtistSchema); 