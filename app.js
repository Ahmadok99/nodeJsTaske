require("express-async-errors");
const config = require("config");
const express = require("express");
const router = require("./routes");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const app = express();
const port = config.get('port');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
