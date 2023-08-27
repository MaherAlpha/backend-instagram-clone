import userRoles from "../enum/userRole.js";

const pathAuthorization = (role) => async (req, res, next) => {
  try {
    role = req.user.role;
    if (!role || role === userRoles.ADMIN) {
      return res.status(403).json({ message: "Forbidden!" });
    } else {
      return res.status(200).json({ message: "Admin Authenticated", role });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error while authorization " });
    next(error);
  }
};
// still needs to be tested
export default pathAuthorization;
