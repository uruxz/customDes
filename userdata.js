const mongoose = require('mongoose');
const users_schema1 = new mongoose.Schema(
    {
        fullname:{
            type:String, required:true,uppercase:true
        },
        email : {
        type :String, required:true, unique:true
        },
        phonenumber :
        {
         type:Number, required:true,unique:true   

        },
        collegename:{
            type:String, required:true

        }
    }
)

const users_collection1 = new mongoose.model('users_collection1',users_schema)
module.exports = users_collection1;