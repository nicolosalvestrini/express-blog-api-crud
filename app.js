const express = require('express')
const postRouter = require('./routers/posts')
const app = express()
const port = 3000

app.use(express.json());
app.use('/posts', postRouter)
app.use(express.static('public'))

app.get('/', (req,res) => {
 res.json('benvenuti nella mia api')
}) 

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})
