const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    video: {
        type: String,
        
    },   
    cues: {
        type: String,
    },    
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise