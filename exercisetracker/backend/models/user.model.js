const mongoose = require('mongoose');

/**Schema defines the structure of the document
 * mongoose model is going to provide interface to db 
 * .. for creating, querying, updating, deleting records, etc
 */
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timetamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

