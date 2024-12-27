const express = require('express');
const { PeerServer } = require('peer');
const path = require('path');

const app = express();

// Use Render's dynamically assigned port
const port = process.env.PORT || 3000;

// Integrate PeerJS server into the Express app
app.use('/peerjs', PeerServer({ path: '/peerjs' }));

// Serve the static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
