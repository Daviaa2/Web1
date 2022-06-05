const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('assets'))

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render("index")
  })

app.listen(PORT, () => {
console.log(`Example app listening on port ${PORT}`)
})