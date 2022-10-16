const express = require("express");
const router = express.Router();
const User = require("../models/register");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.send("User Registered Successfully");
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});
router.post("/login",async (req,res)=>{
  const {email,password}=req.body

 try{
  const user= await User.findOne({email:email,password:password})
  if(user){
      const temp={
          name:user.name,
          email:user.email,
         
          _id:user._id,
      }
      res.send(temp)
  }
  else{
      return res.status(400).json({message: 'Login Failed'});
  }
 }catch(err){
  return res.status(400).json({error});
  }
});
module.exports = router;
