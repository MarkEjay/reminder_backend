const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
//const expenseRoutes = require('./routes/expense')
const userRoutes = require('./routes/user')


app.use(cors())
app.use(express.json());

const db = process.env.dbUrl
mongoose.set("strictQuery", false);

mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err))

app.listen(5009, () => console.log('listening on port 5009'))

app.get('/main', (req, res) => {
    res.send('Hello World')
})

app.use('/api/user', userRoutes)
