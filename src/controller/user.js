import postModel from "../model/post.js";
import userModel from "../model/user.js";
import moment from "moment/moment.js";

const userController = {
  getAll: async (req, res) => {
    try {
      // pagination concept of limit and skip
      const skipValue = req.query.skip || 0;
      const limitValue = req.query.limit || 1;
      const users = await userModel
        .find()
        .sort("-createdAt")
        .skip(skipValue)
        .limit(limitValue);
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
        role: body.role,
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
      user.role = body.role;

      await user.save();
      return res.status(200).json({ message: "User Updated", user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while updating" });
    }
  },
  updateSingle: async (req, res) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const attribute = req.params.attribute;
      const user = await userModel.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      switch (attribute) {
        case "name":
          user.name = body.name;
          break;
        case "email":
          user.email = body.email;
          break;
        case "password":
          user.password = body.password;
          break;
        case "role":
          user.role = body.role;
          break;
        default:
          break;
      }
      await user.save();
      return res
        .status(200)
        .json({ message: `User Single ${attribute} Record Updated`, user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while updating" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ message: "User deleted", user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error While deleting" });
    }
  },
  userOwnedPost: async (req, res) => {
    // do this api in one mongodb query
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
  searchUsers: async (req, res) => {
    try {
      const searchKeyword = req.body.search;
      const skipValue = req.query.skip || 0;
      const limitValue = req.query.limit || 0;
      let filteredSearch = await userModel
        .find({
          $or: [
            { name: new RegExp(searchKeyword) },
            { email: new RegExp(searchKeyword) },
          ],
        })
        .sort("-createdAt" - limitValue)
        .skip(skipValue)
        .limit(limitValue);
      return res
        .status(200)
        .json({ message: "Filtered Search", filteredSearch });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  },
  searchUserByDate: async (req, res) => {
    try {
      const date = req.body.date;
      if (!date) return res.status(404).json({ message: "Date Not Found!" });
      const today = moment(date).format("YYYY-MM-DD[T00:00:00.000Z]");
      let filteredUserByDate = await userModel.find({
        createdAt: { $gte: today },
      });
      return res
        .status(200)
        .json({ message: "Filtered Users By Date!", filteredUserByDate });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error!" });
    }
  },
};

export default userController;
