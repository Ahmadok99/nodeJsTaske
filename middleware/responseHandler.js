/**
 * This function use to handle the response.
 * 
 * @param {import('express').Request} req  res info .
 * @param {import('express').Response} res  send the res after handle. 
 * @param {import('express').NextFunction} next - The next middleware function to call
 */
function responseHandler(req, res, next) {

    const originalSend = res.send;

    res.send = function (data) {
        console.log('Response Data:', data);
        originalSend.call(this, data);
    };

    next();
}

module.exports = responseHandler;
