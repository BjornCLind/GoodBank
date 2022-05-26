const express = require('express')
const app = express()
const port = 5000
const db = require("./database/index")

app.use(express.static(__dirname + '/../dist'));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/get-data/:email', (req, res) => {
  let email = req.params.email

  db.getUserInfo(email)
    .then(result => {
      res.send(result).status(200);
    })
    .catch(err => res.send(err).status(500))
})

app.post('/save-user-data', (req, res) => {

  const { body } = req; // req.body

  db.createAccount(body.email)
  .then(result => {

    res.send(result).status(201);
  })
  .catch(err => res.send(err).status(500))
})

app.put('/deposit-checking', (req, res) => {

  const { body } = req;

  db.updateCheckingBalance(body.email, Number(body.amount))
    .then(result => {
      res.send(result).status(200);
    })
    .catch(err => res.send(err).status(500))
})

app.put('/deposit-savings', (req, res) => {

  const { body } = req;

  db.updateSavingsBalance(body.email, Number(body.amount))
    .then(result => {
      res.send(result).status(200);
    })
    .catch(err => res.send(err).status(500))
})

app.put('/withdraw-checking', (req, res) => {

  const { body } = req;

  db.withdrawFromChecking(body.email, Number(body.amount))
    .then(result => {
      res.send(result).status(200);
    })
    .catch(err => res.send(err).status(500))
})

app.put('/withdraw-savings', (req, res) => {

  const { body } = req;

  db.withdrawFromSavings(body.email, Number(body.amount))
    .then(result => {
      res.send(result).status(200);
    })
    .catch(err => res.send(err).status(500))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})