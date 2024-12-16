const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// app.use(express.static(path.join(__dirname, 'public')));

//GET ALL POSTS
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

app.listen(8000, () => { console.log('server start running on port 8000') });