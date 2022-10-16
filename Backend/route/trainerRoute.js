const express=require('express')
const router=express.Router();
const Trainer=require('../models/trainers')

router.get('/getalltrainers',async(req,res)=>{
    try{
        const trainers=await Trainer.find({})
        res.send(trainers)
    }catch(error){
        return res.status(400).json({message: error})
    }
});
module.exports=router;