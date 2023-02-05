const  mongoose = require("mongoose") ;

const usermodelSchrma =  new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:String,
        min:20,
        max:50
    },
    gender:{
        type:String,
        enum:["Male","Female"]
    }

})

const User = mongoose.model("user",usermodelSchrma) ;
module.exports = User