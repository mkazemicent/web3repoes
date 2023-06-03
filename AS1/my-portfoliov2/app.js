const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

app.post('/contact', (req, res) => {
    let data = `${req.body.name} (${req.body.email}): ${req.body.message}\n`;
    fs.appendFile(path.join(__dirname, 'messages.txt'), data, (err) => {
        if (err) throw err;
    });
    res.redirect('/');
});

app.get('/projects', (req, res) => {
    const projects = [
        {
            title: 'kloudDNA',
            description: 'A platform that uses AI to tag and create a "DNA" for books, movies, and music. It will analyze users\' past preferences and current mood to suggest personalized content recommendations.',
            link: '/'
        },
        {
            title: 'CDN Project',
            description: 'A custom Content Delivery Network (CDN) solution aimed at enhancing web content delivery speed and reliability.',
            link: '/'
        },
        {
            title: 'Portfolio Website',
            description: 'This portfolio website is a showcase of my work and skills in web development. It is a testament to my technical abilities and my knack for clean, intuitive design.',
            link: '/'
        }
    ];
    res.render('projects', { title: 'Projects', projects });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
