const config = require('config');
const express = require('express');
require('express-async-errors');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/error');
const app = express();

if (!config.get('jwtPrivateKey')) {
    console.error('FATAL ERROR: jwtPrivateKey is not defined.')
    process.exit(1)
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/expense', expenseRoutes);
app.use(errorMiddleware)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});