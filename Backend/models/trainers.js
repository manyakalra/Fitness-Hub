const mongoose=require('mongoose');
const trainerSchema=mongoose.Schema({
        id:{type:Number,require},
        name:{type:String,require},
        gender:{type:String,require},
        pic:{type:String,require},
        type:{type:String,require},
        qualification:{type:String,require},
        experience:{type:String,require},
        slug:{type:String,require}

})
const trainerModel=mongoose.model('trainers',trainerSchema)
module.exports=trainerModel