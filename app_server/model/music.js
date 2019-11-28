const mongoose = require( 'mongoose' );
const MusicSchema = new
mongoose.Schema({
name: {type: String, required: true},
singer: {type: String, required: true},
album: {type: String, required: true},
genre: {type: String, required: true},
year: {type: Number, required: true}
});



mongoose.model('music',MusicSchema);