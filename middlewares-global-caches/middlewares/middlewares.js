function userMiddleware (req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !== 'pratik' || password !== 'pass'){
        res.status(403).json({
            msg:"User not found"
        });
    } else {
        next();
    }
}

function kidneyMiddleware (req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId);

    if(kidneyId !== 1 && kidneyId !== 2){
        res.status(403).json({
            msg:"Not valid kidney count"
        });
    } else {
        next();
    }
}

module.exports = {
    userMiddleware,
    kidneyMiddleware
}