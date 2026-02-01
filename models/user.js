const mongoose = require('mongoose');
//const MongooseErrors = require('mongoose-errors')

const userSchema = mongoose.Schema({
    
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    mail: {type: String, required: true},
    name: {type: String, required: true},
    surname:  {type: String, required: true},
    phone: { type: String, required: true},
    adress: { type: String, required: true},
    birthdate: { type: String, equired: true},
    description: { type: String, required: true},
    specs: [{ type: String }],
    animals: [{ type: String }],
    interests: [{ type: String }],
    vehicule: { type:Boolean, required : false},
    points: { type: Number, required: false},
    badge: { type: Number, required: false}

});

//userSchema.plugin(MongooseErrors);
module.exports = mongoose.model('User', userSchema, "users");