import postModel from "../model/post.js";
import userModel from "../model/user.js";

const userController = {
  getAll: async (req, res) => {
    try {
      // pagination concept of limit and skip
      const limitValue = req.query.limit || 1;
      const skipValue = req.query.skip || 0;
      const users = await userModel.find().limit(limitValue).skip(skipValue);
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Eror while fetching" });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while fetching" });
    }
  },
  create: async (req, res) => {
    try {
      const body = req.body;
      const user = await userModel.create({
        name: body.name,
        email: body.email,
        password: body.password,
      });
      return res.status(200).json({ message: "User created", user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while creating" });
    }
  },
  update: async (req, res) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.name = body.name;
      user.email = body.email;
      user.password = body.password;

      await user.save();
      return res.status(200).json({ message: "User Updated", user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while updating" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const delUser = await userModel.deleteOne({ user });

      return res.json({ message: "User deleted", delUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error While deleting" });
    }
  },
  userOwnedPost: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const userPosts = await postModel.findById(id).populate("user_id");
      return res
        .status(200)
        .json({ message: "User owned posts displayed!", userPosts });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while fetching!" });
    }
  },
};

export default userController;
