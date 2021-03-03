const express = require('express');
const app = express();
const dynamicResponse = require('./routes/server')

app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use('/dynamicResponse',dynamicResponse)

const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Express app started on port 5000");
});


//URL TO BE GIVEN IN POSTMAN
// http://localhost:5000/dynamicResponse