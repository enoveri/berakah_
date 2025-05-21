import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  // Extract the path from the URL
  const urlPath = req.path.replace(/^\/+|\/+$/g, '');
  
  if (urlPath && urlPath !== 'index.html') {
    // Redirect to the hash route
    res.redirect(`/#/${urlPath}`);
  } else {
    // Serve the index.html file
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
