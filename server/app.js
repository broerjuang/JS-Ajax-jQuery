'use strict'

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router()


// controller
let colorController = (req, res) => {
  let colorCollection = ['green', 'blue', 'yellow', 'red', 'orange']
  let randomPicker = Math.floor(Math.random() * 4)
  res.json(colorCollection[randomPicker])
}

// router
router.get('/color', colorController)

// live server
app.use('/', router);

app.use('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log('server is running on port ', port);
})
