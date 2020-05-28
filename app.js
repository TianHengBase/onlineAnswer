const express = require("express")
const token = require("./token");


var app = express()
app.get('/',function (req,res) {
    res.send('hello word')
})

app.post('/logn',function (req,res) {
    req.rawBody = '';//添加接收变量
    
   
    req.on('data', function(chunk) { 
      req.rawBody += chunk;
    });
    req.on('end', function() {
    
        console.log(req.rawBody)
        let jwt = new token()
        
        res.send(jwt.generateToken("123"))
      

    }); 
    
})


app.listen(3000,function () {
    console.log("app is running!");
})