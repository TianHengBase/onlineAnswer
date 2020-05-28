var express = require("express")

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
        res.send("11")
        
    }); 
    
})


app.listen(3000,function () {
    console.log("app is running!");
})