const errResponse = require("../enum/responseCode");

// exception throw krty hain
// jb validation fail ho usky liye iyk code decide kr lo
// baki exceptions k lye bad requests
// tky front end user esi logic likhye jo k error handling khud he kr lyn

export default errorHandler=(res,req,next)=>{
    const error= req.query.error;
    if(error.name===errResponse.MULTIPLE_CHOICE){
    res.status(300).json(error,"Multiple Chocies, Choose Only One!") 
    next(error);}
    else if(error.name===errResponse.MOVED_PERMANENTLY){
        res.status(301).json(error,"Moved Permanently!")
        next(error)
    }
    else if(error.name===errResponse.BAD_REQUEST){
        res.status(400).json(error,"Bad Request!")
        next(error)
    }
    else if(error.name===errResponse.UNAUTHORIZED){
        res.status(401).json(error,"Unauthorized!")
        next(error)
    }
    else if(error.name===errResponse.PAYMENT_REQUIRED){
        res.status(402).json(error,"Payment Required!")
        next(error)
    }
    else if(error.name===errResponse.FORBIDDEN){
        res.status(403).json(error,"Forbidden!")
    next(error)
}
    else if(error.name===errResponse.NOT_FOUND){
        res.status(404).json(error,"Not Found!")
        next(error)
    }
    else if(error.name===errResponse.REQUEST_TIMEOUT){
        res.status(408).json(error,"Request Time Out!")
        next(error)
    }
    else{
        res.status(500).json(error,"Internal Server Error!")
        next(error)
    }
}