const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// Parse JSON request bodies
app.use(express.json());

const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// GET: Return all locations from data.json
app.get('/api/locations', (req, res) => {
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load data' });
    }
    res.json(JSON.parse(data));
  });
});

// POST: Save new location to data.json
app.post('/api/save-location', (req, res) => {
  const newLocation = req.body;
  const dataPath = path.join(__dirname, 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Read failed' });
    }

    let locations;
    try {
      locations = JSON.parse(data);
    } catch (parseErr) {
      locations = [];
    }

    // Remove previous 'Pinned Location' entries
    locations = locations.filter(loc => loc.name !== 'Pinned Location');
    // Add the new location
    locations.push(newLocation);

    fs.writeFile(dataPath, JSON.stringify(locations, null, 2), err => {
      if (err) {
        return res.status(500).json({ error: 'Write failed' });
      }
      res.json({ message: 'Location saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
