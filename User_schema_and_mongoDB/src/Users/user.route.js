 
 const express = require("express")


 const User= require("./uses.model")

 const app = express.Router()



  app.get("/", async(req,res)=>{

    const alluser = await User.find()
    res.send(alluser)
  })

//   app.post("/", async(req,res)=>{
//     try {
//         const newuser=  await User.create({
//             ...req.body
//         })
//         res.send(newuser)
        
//     } catch (error) {
//         res.send(error.message)
        
//     }
//   })



app.post("/", async(req,res)=>{
    try {

        const {name,email,age,gender}= req.body

        const findUser = await User.findOne({email})
        if(findUser){
            res.send("This User Already Exits")
        }

        const newuser=  await User.create({
            name,email,age,gender
        })
        res.send(newuser)
        
    } catch (error) {
        res.send(error.message)
        
    }
  })



  app.get("/:id", async(req,res)=>{
    const id = req.params.id

   try {
    const findUser = await User.findById({_id:id})
    res.send(findUser)
    
   } catch (error) {
    res.send(error.message)
    
   }

  })


  app.delete("/:id", async(req,res)=>{
    const id = req.params.id

   try {
    const deleteUser = await User.deleteOne({_id:id})
    res.send(" User Deleted Succesfully")
    
   } catch (error) {
    res.send(error.message)
    
   }

  })


  app.patch("/:id",async(req,res) => {
    try{
       const {id}=req.params
       let update=await User.findByIdAndUpdate(id,{...req.body},{new:true})
           
   
         return res.send(update)
    }catch(e){
      res.send(e.massage)
    }
   
   })
   

   app.put("/:id",async(req,res) => {
    try{
       const {id}=req.params
       let update=await User.findByIdAndUpdate(id,{...req.body},{new:true})
           
   
         return res.send(update)
    }catch(e){
      res.send(e.massage)
    }
   
   })






  module.exports= app