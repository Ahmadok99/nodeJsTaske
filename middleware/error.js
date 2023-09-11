/**
 * check if there any error and return the details about it.
 * 
 * @param {import('express').error} error  if we have error.
 * @param {import('express').Request} req  .
 * @param {import('express').Response} res  check if there any error. 
 * @param {import('express').NextFunction} next - The next middleware function to call.
 */
const ErrorHandler = (err, req, res, next) => {
    console.log("Middleware Error Hadnling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

module.exports =ErrorHandler


