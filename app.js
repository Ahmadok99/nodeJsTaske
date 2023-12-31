require("express-async-errors");
require('dotenv').config();

const express = require("express");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const responseHandler = require('./middleware/responseHandler'); 

const app = express();
const port = process.env.port;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
app.use(responseHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
