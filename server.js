
const express = require('express');
const app = express();
app.use(express.static(__dirname+'/'));
app.listen(5050);
console.log("Node/Express server is running on port 5050");