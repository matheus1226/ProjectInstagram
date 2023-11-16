const express = require('express')
const app = express()
const router = require('./Utils/router')
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();




const PORT = process.env.PORT || process.env.LOCAL_PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useFindAndModify: false
  })
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB: ", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(express.json())
app.use(router)


app.listen(PORT, console.log(`Server running on port ${PORT}`));