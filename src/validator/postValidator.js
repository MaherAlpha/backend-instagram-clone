import joi from "joi";
const postValidator = {
    create: (req, res, next) => {
        const schema = joi.object({
          title: joi.string().min(5).max(30).required(),
          description: joi.string().min(5).max(1000).required(),
          user_id: joi.string().required(),
        });
    
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: "Invalid Data", error });
        next();
      },
      update: (req, res, next) => {
        const schema = joi.object({
          title: joi.string().min(5).max(30).required(),
          description: joi.string().min(5).max(1000).required(),
          user_id: joi.string().required(),
        });
    
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).json({ message: "Invalid Data", error });
        next();
      },
      
};

export default postValidator;