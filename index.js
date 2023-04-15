const express = require('express')
const app = express()
const port = 3000
const phones = require('./phones.json');

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('my phones server coming soon')
});
app.get('/phones', (req, res) => {
    res.send(phones)
})
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id: ', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})