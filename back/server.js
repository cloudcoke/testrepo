const express = require("express")
const app = express()
const test = require("./tset")

app.get("/", (req, res, next) => {
  res.send(test)
})

app.listen(3000, () => {
  console.log("Server Start 3000")
})
