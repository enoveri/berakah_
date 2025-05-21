import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// List of all routes in the application
const routes = [
  { path: 'about', title: 'About' },
  { path: 'contact', title: 'Contact' },
  { path: 'leadership', title: 'Leadership' },
  { path: 'locations', title: 'Locations' },
  { path: 'generosity', title: 'Generosity' },
  { path: 'cell-family', title: 'Cell Family' },
  { path: 'partners', title: 'Partners' },
  { path: 'sponsor', title: 'Sponsor' },
  { path: 'donate', title: 'Donate' },
  { path: 'ministry-needs', title: 'Ministry Needs' },
  { path: 'sponsor-child', title: 'Sponsor a Child' },
  { path: 'statement-of-faith', title: 'Statement of Faith' },
  { path: 'call2prayer', title: 'Call2Prayer' },
  { path: 'stories-of-impact', title: 'Stories of Impact' },
  { path: 'choir', title: 'Choir' },
  { path: 'pastors-network', title: 'Pastors Network' },
  { path: 'widows-elderly-care', title: 'Widows & Elderly Care' },
  { path: 'childrens-church', title: 'Children\'s Church' },
  { path: 'church-planting', title: 'Church Planting' },
  { path: 'prayer-requests', title: 'Prayer Requests' },
  { path: 'teaching-series', title: 'Teaching Series' }
];

// Template for redirect HTML files
const getRedirectTemplate = (route, title) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting to ${title} - International Great Faith Ministries</title>
  <script>
    // Redirect to the hash route
    window.location.replace(window.location.origin + '/#/${route}');
  </script>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #EBF4FF;
      color: #1E3A8A;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    h1 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border-left-color: #1E3A8A;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Redirecting to ${title} Page</h1>
    <p>Please wait while we redirect you to the ${title} page...</p>
    <div class="spinner"></div>
  </div>
</body>
</html>`;

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate redirect files for each route
routes.forEach(route => {
  const filePath = path.join(publicDir, `${route.path}.html`);
  const content = getRedirectTemplate(route.path, route.title);

  fs.writeFileSync(filePath, content);
  console.log(`Created redirect file for ${route.path}`);
});

console.log('All redirect files generated successfully!');
