import postModel from "../model/post.js";

const postController = {
  getAll: async (req, res) => {
    const posts = await postModel.find().populate("user_id");
    return res.json(posts);
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id).populate("user_id");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.json(post);
  },
  create: async (req, res) => {
    const body = req.body;
    const post = await postModel.create({
      title: body.title,
      description: body.description,
      user_id: body.user_id,
    });

    return res.json({ message: "Post created", post });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id).populate("user_id");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const body = req.body;
    const updatedPost = await postModel.create({
      title: body.title,
      description: body.description,
      user_id: body.user_id,
    });

    return res.json({ message: "Post updated", updatedPost });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const post = await postModel.findById(id).populate("user_id");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const delPost = await postModel.deleteOne({ post });

    return res.json({ message: "post deleted", delPost });
  },
};

export default postController;
