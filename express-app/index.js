const express = require("express");
const app = express()

// app.use((req, res) => {
//     res.send("We Just getting started")
//     console.log("We got a new request")

// })

app.get('/', (req, res) => {
    res.send('This is the Homepage')
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params
    res.send(`<h1>Browsing the ${subreddit} in the ${postID}</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('Cats request')
})

app.get('/dogs', (req, res) => {
    res.send('Dogs webpage')
})
app.get('/search', (req, res) => {
    const { q } = req.query
    res.send(`<h1>Here is the serach for ${q} </h1>`)
})


app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})