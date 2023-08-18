import studentModal from "../model/student.js";

const studentController = {
  getAll: async (req, res) => {
    const students = await studentModal.find();
    return res.json(students);
  },
  getSingle: (req, res) => {
    const students = studentModal.fi();
    return res.json(students);
  },
  create: async (req, res) => {
    const name = req.body.name;
    const student = await studentModal.create({ name });

    return res.json({ message: "Student created", student });
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

export default studentController;
