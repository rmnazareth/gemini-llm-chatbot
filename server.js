require('dotenv').config()

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/get-api-key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
