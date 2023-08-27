import joi from "joi";
const userValidator = {
    create: (req, res, next) => {
        const schema = joi.object({
          name: joi.string().min(5).max(30).required(),
          email: joi.string().min(10).max(30).required(),
          password: joi.string().min(8).max(25).alphanum().required(),
          role: joi.string().min(4).required()
        });
    
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: "Invalid Data", error });
        next();
      },
      update: (req, res, next) => {
        const schema = joi.object({
            name: joi.string().min(5).max(30).required(),
            email: joi.string().min(10).max(30).required(),
            password: joi.string().min(8).max(25).alphanum().required(),
            role: joi.string().min(4).required()
        });
    
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: "Invalid Data", error });
        next();
      },
      
};

export default userValidator;