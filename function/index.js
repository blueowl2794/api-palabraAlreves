function palabraAlreves(req, res, next){

    let text = req.query.text;

    try {
        if (text) {
            res.status(200).json({"text":text.split('').reverse().join('')});
        }else{
            res.status(400).json({"error": "no text"});
        }
    } catch (e) {
        next(e);
    }
    
};

module.exports = { palabraAlreves };