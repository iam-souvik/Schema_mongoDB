const express = require("express")

const Blog = require("./blog.model");

const app = express.Router();

app.get("/", async(req,res)=>{
    console.log("souvik");
let blog = await Blog.find()

    res.send(blog);
})


app.get("/:id",async(req,res) => {
    const {id}=req.params;
    let blog=await Blog.find({_id:id})
    res.send(blog)
})

app.post("/", async(req,res) => {
    // console.log(req.body);
    try {
        let  c_blog= await Blog.create({
            ...req.body
        })
        console.log(c_blog);
        res.send(c_blog)
        
    } catch (error) {
        res.send(error.message)
        
    }
})







app.delete("/:id", async(req,res)=>{
    const id = req.params.id
    const de_blog=  await Blog.deleteOne({_id:id})

    res.send(" Blog Delete succesfullt ")

})

module.exports= app