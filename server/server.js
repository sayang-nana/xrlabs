require("dotenv").config()
const express = require("express");

const app = express();
app.use(express.json())
app.use(express.static("public"));

app.use((req,res,next) => {
    console.log("yeah our middleware")
    next();
})

//get all restaurants
app.get("/api/v1/restaurants", (req,res) =>{
    res.json({
        success:"success",
        status:"restaurant",
        location:"new york",
        
    })
});
//get a restaurant
app.get("/api/v1/restaurants/:id", (req,res) => {
    console.log(req.params);
});
//create a restaurant
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req.body)
})

//update a restaurant 
app.put("/api/v1/restaurants/:id", (req,res)=>{
   console.log(req.params.id);
   console.log(req.body)
   res.status(200).json({
    status:"success",
    data:{ restuarant:"mcdonalds",},
   });

});


const port = process.env.PORTT;
app.listen(port,() =>{
console.log(`listening on server ${port}`)

});