const express = require('express');
const app = express();

app.get('/',(req, res) => res.send("Hello, ATRASC!"));
app.listen(5000, () => console.log(" connected! "));