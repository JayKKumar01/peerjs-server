const express = require('express');
const { PeerServer } = require('peer');
const path = require('path');

const app = express();

// Use the PORT from Render environment variable or default to 3000 for local testing
const port = process.env.PORT || 3000;

// Set up the PeerJS server and bind it to the path '/peerjs'
const peerServer = PeerServer({
  port: 8000,   // PeerJS should run on this port
  path: '/peerjs', // Custom path for PeerJS
  secure: true  // Enable HTTPS for secure connections
});

// Integrate PeerJS server into your Express app
app.use('/peerjs', peerServer);

// Serve the static files (index.html, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Start the Express server
app.listen(port, () => {
  console.log(`Web server running on http://localhost:${port}`);
});

