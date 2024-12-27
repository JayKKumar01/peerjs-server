const express = require('express');
const { PeerServer } = require('peer');
const path = require('path');

const app = express();

// Use PORT from environment variable or default to 3000 if not defined
const port = process.env.PORT || 3000;

// Set up the PeerJS server (using Render's dynamic port)
const peerServer = PeerServer({ port: 9000, path: '/peerjs' });

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
