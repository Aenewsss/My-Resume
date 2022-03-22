const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PORT || port, () => {
    console.log(`Server is at http://localhost:${port}`)
})