/**
 * check if there any error and return the details about it.
 * 
 * @param {import('express').error} error  if we have error.
 * @param {import('express').Request} req  .
 * @param {import('express').Response} res  check if there any error. 
 * @param {import('express').NextFunction} next - The next middleware function to call.
 */
module.exports.errorMiddleware = (err, req, res, next) => {
    console.log({ error: err.message })
    res.status(500).json({ error: 'Something went wrong' });
};



