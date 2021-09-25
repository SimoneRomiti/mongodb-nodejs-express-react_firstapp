const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },

   lastName: {
      type: String,
      required: true 
   },

   age: {
      type: Number
   }
})

module.exports = mongoose.model('Person', personSchema);