const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    content: {
        type: String,
        require: true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    author:{
        type:String,
        require:true
    }


})

const Blog = mongoose.model("blog",blogSchema) ;
module.exports= Blog
