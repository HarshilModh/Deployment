const express = require("express")
const path = require("path")


const app = express()

app.use(express.static(__dirname+"/dist/c-tf21-mean"));

app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname+"/c-tf21-mean/index.html"));  
});

app.listen(process.env.PORT || 8080 );




