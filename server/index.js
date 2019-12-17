const express = require('express')
const app = express()
const morgan = require('morgan');
const port = 3000


app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))