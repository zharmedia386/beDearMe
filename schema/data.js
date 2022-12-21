const mongoose = require('mongoose')

const Data = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
     },
     title: {
        type: String
     },
     gridOne: {
      type : String,
      default : "" 
    },
     gridTwo: {
      type : String,
      default : "" 
    },
     gridThree: {
      type : String,
      default : "" 
    },
     gridFour: {
      type : String,
      default : "" 
    },
     gridFive: {
      type : String,
      default : "" 
    },
     gridSix: {
      type : String,
      default : "" 
    },
     dateTime: Date,
},{versionKey: false})


module.exports = mongoose.model("Data", Data)