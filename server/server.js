const express = require('express');
const app = express();
const path = require('path');

// get path to public directory
const publicPath = path.join(__dirname, '..', 'public')

// launch app from public directory
app.use(express.static(publicPath));

app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'))
})

const port = 3000;
app.listen(port , () => {
    console.log(`Server is up and running on port ${port}`)
})









