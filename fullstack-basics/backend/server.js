import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Server is Ready ...")
});

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {

    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            content : 'This is the first joke...'
        },
        {
            id: 2,
            title: 'Another Joke',
            content : 'This is the second joke...'
        },
        {
            id: 3,
            title: 'Third Joke',
            content : 'This is the third joke...'
        },
        {
            id: 4,
            title: 'Fourth Joke',
            content : 'This is the fourth joke...'
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content : 'This is the fifth joke...'
        },
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})