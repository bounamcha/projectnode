const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true },
    email :   {
            type: String,
            required: true },          
   
    password : {
        type: String,
        required: true },  
    confirmepass:{
        type: String,
        required: true },
    },
{
 timestamps: true,  
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;