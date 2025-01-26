const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, 'public');



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.static(path.join(__dirname, 'public/avis')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
// Home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Home', domain:publicPath });
});

// About route
app.get('/404', (req, res) => {
    res.render('partials/404', { title: 'Page Not Found',  domain:publicPath });
});

// Resume route to download PDF
app.get('/resume', (req, res) => {
    const resumePath = path.join(__dirname, 'public', 'resume.pdf');
    res.download(resumePath, 'resume.pdf', (err) => {
        if (err) {
            console.error('Error downloading resume:', err);
        }
    });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('partials/404', { title: '404 - Page Not Found', domain:publicPath });
});

// Start the server
app.listen(PORT, () => {
    outputLog(`Server is running on http://localhost:${PORT}`);
    outputLog(path.join(__dirname, 'public'));
});

// Helper functions
function outputLog(message) {
    console.log(new Date().toLocaleString({ dateStyle: 'short', timeStyle: 'short' }), '--->', message);
}