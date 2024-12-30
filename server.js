import express, { json, urlencoded } from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 8000;
import posts  from './routes/posts.js';

// app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(json());
app.use(urlencoded({ extended: false }));

//Routes
app.use('/api/posts', posts);

app.listen(8000, () => { console.log('server start running on port 8000') });