import userModal from "../model/user.js";

const userController = {
  getAll: async (req, res) => {
    const users = await userModal.find();
    return res.json(users);
  },
  getSingle: (req, res) => {
    const users = userModal.findById();
    return res.json(users);
  },
  create: async (req, res) => {
    const name = req.body.name;
    const users = await userModal.create({ name });

    return res.json({ message: "Student created", users });
  },
  update: (req, res) => {
    console.log(req.body);
    return res.json({ message: "This is post request" });
  },
  delete: (req, res) => {
    console.log(req.body);
    return res.json({ message: "This is post request" });
  },
};

export default userController;
