const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/avis')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
// Home route
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// About route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
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

// 404 Page (Optional)
app.use((req, res) => {
    res.status(404).render('partials/404', { title: '404 - Page Not Found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
