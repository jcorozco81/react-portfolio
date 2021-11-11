const { Schema, model } = require('mongoose');

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
date: {
    type: Date,
    default: Date.now
  }

});

const Message = model('Message', messageSchema);

module.exports = Message;