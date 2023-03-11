const express = require("express");
const hbs= require("hbs")
const app = express()
const mongoose = require("mongoose")
const routes = require('./routes/main')
const Detail=require("./models/Detail")

app.use('/static', express.static("public"))
app.use('',routes)


// (template enging)
app.set('view engine', 'hbs')
app.set("views", "views")
hbs.registerPartials("views/partials")

// database connectinon
mongoose.set("strictQuery", false);
mongoose.connect("mongobd://localhost:27017/website_tut",()=>{
    console.log("database redy")
    // Detail.create({
    //     brandName:"",
    //     brandIconUrl:"./static/images/logo.png",
      
    // })
})





app.listen(process.env.PORT | 5556, () =>{
    console.log("server started")
});