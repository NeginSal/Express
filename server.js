const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, () => { console.log('server start running on port 8000') });