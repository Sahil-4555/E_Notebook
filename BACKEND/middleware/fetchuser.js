var jwt = require('jsonwebtoken');
const JWT_SECRET = 'SahilLovesJill$0';

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    // console.log(token)
    if (!token) {
        res.status(401).send({ error: "Please Authenticate Using A Valid Token!" });
        // console.log("401-1");
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        // console.log(data);
        req.user = data.user;
        // console.log(data.user);
        next();
    }
    catch(error) {
        res.status(401).send({ error: "Please Authenticate Using A Valid Token!" });
        // console.log("401-2");
    }

}

module.exports = fetchuser;