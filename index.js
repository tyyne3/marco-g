const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))

// Templating Engine
//app.set('views', 'public/index.html')

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))
