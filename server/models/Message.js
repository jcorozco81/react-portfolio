const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const messageSchema = new Schema({

fullname:{
    type: String,
    required: true,
    trim: true,
},
email:{
    type: String,
    required: true,
    trim: true,
},
body:{
    type: String,
    required: true,
    trim: true,
},
date_sent: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }

});

const Message = model('Message', messageSchema);

module.exports = Message;