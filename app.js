const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let data;
    fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(json => {
            data = json
        });
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/api/users', (req, res) => {
    const myObj = [{ name: 'muffy', age: 33 }, { name: 'hakam', age: 26 }]
    res.jsonp(myObj)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))