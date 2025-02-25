const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');


const CoustomerSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        default:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
});

CoustomerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Coustomer', CoustomerSchema);