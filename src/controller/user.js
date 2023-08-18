import userModel from "../model/user.js";

const userController = {
  getAll: async (req, res) => {
    const users = await userModel.find();
    return res.json(users);
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  },
  create: async (req, res) => {
    const body = req.body;
    const user = await userModel.create({
      name: body.name,
      email: body.email,
    });

    return res.json({ message: "User created", user });
  },
  update: async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = body.name;
    user.email = body.email;

    await user.save();
    return res.json({ message: "User Updated", user });
  },
  delete: async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const delUser = await userModel.deleteOne({ user });

    return res.json({ message: "User deleted", delUser });
  }
};

export default userController;
