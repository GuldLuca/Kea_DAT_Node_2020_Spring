var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/aboutThisWebsite', function(req, res) {
    
    const aboutThisWebsite = {
        author : "Luca",
        createdOn : "13-02-20",
        subject: "node.js elective",
        id : 1
        
    }
    res.send(aboutThisWebsite)
})
  
  
app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 3000);
});
  

