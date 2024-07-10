const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/cat-images', async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cat images' });
    }
});

app.get('/ip', async (req, res) => {
    try {
        const response = await axios.get('http://ip-api.com/json/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching IP information' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
