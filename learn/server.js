const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
        res.send('Hello from express api')
});

app.get('/AllRecipe', async (req, res) => {
        try {
                const response = await fetch('https://dummyjson.com/recipes');
                if (!response.ok) {
                        throw new Error(`Http error! status: ${response.status}`);
                }
                const data = await response.json();
                res.json(data);
        } catch (error) {
                console.error('Fetch Error', error);
                res.status(500).json({ error: 'Failed to fetch data' });
        }
})

app.get('/AllRecipe/:id', async (req, res) => {
        const { id } = req.params;
        console.log("id", id);
        try {
                const response = await fetch(`https://dummyjson.com/recipes/${id}`);
                console.log(`https://dummyjson.com/recipes/${id}`)
                if (!response.ok) {
                        throw new Error('something went wrong');
                }

                const data = await response.json();
                res.json(data);
        } catch (error) {
                console.error('fetch error', error);
                res.status(500).json({
                        error: 'fail to get data'
                })
        }
})

app.listen(port, () => {
        console.log('server started running....')
});
