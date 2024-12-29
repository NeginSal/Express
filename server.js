const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;
const posts = require('./routes/posts');

// app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/posts', posts);

app.listen(8000, () => { console.log('server start running on port 8000') });