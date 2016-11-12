'use strict'

const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const router = express.Router()


// controller
let colorController = (req, res) => {
  let colorCollection = ['green', 'blue', 'yellow', 'red', 'orange', 'purple', 'brown']
  let randomPicker = Math.floor(Math.random() * 7)
  res.json(colorCollection[randomPicker])
}

// router
router.get('/colors', colorController)

// cors

app.use(cors())

// live server
app.use('/api', router);


app.listen(port, () => {
  console.log('server is running on port ', port);
})
