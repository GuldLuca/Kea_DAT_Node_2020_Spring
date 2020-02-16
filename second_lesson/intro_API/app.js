var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world')
})

app.get('/aboutThisWebsite', function(req, res) {
    
    const aboutThisWebsite = {
        author : "Luca",
        createdOn : "13-02-20",
        subject: "node.js Elective",
        id : 1
        
    }
    res.send(aboutThisWebsite)
})

app.get("/hithere", (req, res) => {
    const response = {
        message: "hi there"
    }
    res.send(response);
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];

app.get("/time", (req, res) => {
    const date = new Date();
    res.send({ 
        unformatedTime: date,
        time: date.toString(),
        day: date.getDay(),
        weekDay: days[date.getDay()]
    });
});
  
  
app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 3000);
});
  

