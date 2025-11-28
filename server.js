const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Serve the main HTML file
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n⚡ Circuit closed! Server running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});