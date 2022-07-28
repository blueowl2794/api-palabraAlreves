function palabraAlreves(req, res, next){

    let text = req.query.text;

    try {
        if (text) {
            if(text.toLowerCase().split(" ").join("") === text.toLowerCase().split(' ').join('').split("").reverse().join("")){
                
                res.status(200).json({"text":text.split('').reverse().join('').toLowerCase(), "palindrome":true});
            }
            else{

                res.status(200).json({"text":text.split('').reverse().join('').toLowerCase(), "palindrome":false});
            }
            
        }else{
            res.status(400).json({"error": "no text"});
        }
    } catch (e) {
        next(e);
    }
    
};

module.exports = { palabraAlreves };