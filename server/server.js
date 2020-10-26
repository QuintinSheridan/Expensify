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

// get herku port from environment variables
const port = process.env.PORT;
app.listen(port , () => {
    console.log(`Server is up and running on port ${port}`)
})









