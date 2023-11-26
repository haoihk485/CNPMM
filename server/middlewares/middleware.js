export const logInfo = (req, res, next) => {
    console.log(req.body);
    next()
}