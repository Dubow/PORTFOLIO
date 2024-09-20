const express = require('express');
const app = express()

// Middleware to parse JSON bodies
app.use(express.static('public'));
app.use(express.json()); //for handling json data
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Portfolio/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});