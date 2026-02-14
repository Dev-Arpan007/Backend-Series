import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready');
})
app.get('/api/jokes', (req, res)=>{
   const jokes = [
    {
        "id": 1,
        "title":"1st joke",
        "desc": "haste raho"
    },
    {
        "id": 2,
        "title":"2nd joke",
        "desc": "haste raho hehe"
    },
    {
        "id": 3,
        "title":"3rd joke",
        "desc": "haste raho hahaha"
    },
    {
        "id": 4,
        "title":"4th joke",
        "desc": "haste raho hohohoho"
    }

   ]

   res.json(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});