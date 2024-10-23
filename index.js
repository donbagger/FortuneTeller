const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const axios = require('axios');
const PORT = process.env.PORT || 3000;
const path = require('path');

// Set up Handlebars as the template engine
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main', 
    extname: '.hbs',
    helpers: {
        eq: (a, b) => a === b,  // Helper for equality check
      },
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Serve static files
app.use(express.static('public', path.join(__dirname, 'public')));

// Creating Random route
const fortunes = ['fortune1', 'fortune2', 'fortune3', 'fortune4', 'fortune5', 'fortune6', 'fortune7', 'fortune8', 'fortune9', 'fortune10'];

// mapping names to countries
const countryToName = {
    'Canada': 'Emi',
    'Sri Lanka': 'Nigel',
    'India': 'Varun',
    'Indonesia': 'Riska',
    'Poland': 'Michałek lub Kubuś',
    'United Arab Emirates': 'Mateusz'
  };


// Routing
app.get('/', async (req, res) => {
    const ip = req.ip === '::1' ? '203.94.72.111' : req.ip;

    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`);
        const country = response.data.country;
        const city = response.data.city;
        const name = countryToName[country] || 'Guest'; 
    
  res.render('home', { name, country });
  console.log(country, name, city);  
    } catch (err) {
        console.error('Error Fetching Location:', err);
        res.render('home', {name: 'Guest', country: null});
    }
});

app.get('/random', (req, res) => {
    // Pick a random route from the array
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render(randomFortune);
  });


app.use((req, res) => {
    res.render('404')
});

app.listen(PORT, function () {
    console.log(`Server started on port: ${PORT}`);
  });
