
const errorMiddleware = (err, req, res, next) => {
    console.log({ error: err.message })
    res.status(500).json({ error: 'Something went wrong' });
};



module.exports = errorMiddleware;