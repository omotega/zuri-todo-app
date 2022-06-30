const express = require("express");
const dotenv = require("dotenv").config();

const { error } = require('./middlewares/error');
const port = process.env.PORT || 3600;
const app = express();


const todorouter = require("./routes/todoroute");
const connectdb = require("./config/db");

connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo', todorouter);
app.use(error);

app.listen(port, console.log(`port connected on ${port}`));
