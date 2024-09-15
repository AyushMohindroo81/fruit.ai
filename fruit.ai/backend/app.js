// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let faqs = [];

// Get all FAQs
app.get('/faqs', (req, res) => {
  res.json(faqs);
});

// Create a new FAQ
app.post('/faqs', (req, res) => {
  const newFaq = req.body;
  faqs.push(newFaq);
  res.status(201).json(newFaq);
});

// Update an FAQ by ID
app.put('/faqs/:id', (req, res) => {
  const id = req.params.id;
  faqs[id] = req.body;
  res.json(req.body);
});

// Delete an FAQ by ID
app.delete('/faqs/:id', (req, res) => {
  const id = req.params.id;
  faqs.splice(id, 1);
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
