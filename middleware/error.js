
/**
 * check if there any error and return the details about it.
 * 
 */
module.exports.errorMiddleware = (err, req, res, next) => {
    console.log({ error: err.message })
    res.status(500).json({ error: 'Something went wrong' });
};



