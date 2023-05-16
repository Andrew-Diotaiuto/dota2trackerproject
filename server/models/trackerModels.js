const mongoose = require('mongoose');
 
const TrackerSchema = new mongoose.Schema({
    hero: {
        type: String,
        required:[true, 'Hero name is required'],
        minLength:[2, 'The hero name must be 2 or more characters'],
        maxLength:[50, 'The hero name must be 2 or more characters (MAX 50 characters']
    },
    mmr: {
        type: Number,
        required:[true, 'MMR is required'],
        minLength:[1, 'The MMR must exist'],
        maxLength:[50, 'The MMR is too much']
       
        
    },
    thoughts: {
        type: String,
        required:[true, 'Game thoughts are required'],
        minLength:[3, 'The game thoughts must be 3 or more characters'],
        maxLength:[50, 'The game thoughts must be 3 or more characters (MAX 50 characters']
    },
    
    win: {
        type: Boolean,
        required:[true, 'Win/loss is required']
    }
}, {timestamps:true});
 
const Tracker = mongoose.model('Tracker', TrackerSchema);
 
module.exports = Tracker;