
const express = require('express')
const cors = require('cors')
const port = 1010;

const app = express()
app.use(cors({
    origin:"http://localhost:3000",
    credentials: true
}))

app.use(express.json())
app.use('/', require('./routes/search'))


app.listen(1010, ()=> console.log(`Server started on port ${port}`))