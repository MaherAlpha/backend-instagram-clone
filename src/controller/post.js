import postModal from "../model/post.js";

const postController = {
  getAll: async (req, res) => {
    const posts = await postModal.find();
    return res.json(posts);
  },
  getSingle: (req, res) => {
    const posts = postModal.findById();
    return res.json(posts);
  },
  create: async (req, res) => {
    const name = req.body.name;
    const posts = await postModal.create({ name });

    return res.json({ message: "Student created", posts });
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

export default postController;
