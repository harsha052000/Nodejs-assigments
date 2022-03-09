const express = require('express');

const app = express();

app.get('/year', (req, res) => {
    
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
    
    const age = req.query.age;
    let currentYear = new Date().getFullYear();
    let year = currentYear - age;
    res.send(`You were born in ${year}.`);
});

app.listen(13000, () => console.log('Application started on port 13000...'));