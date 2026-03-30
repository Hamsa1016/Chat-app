const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
const upload = require("../middleware/upload");

router.post("/upload", upload.single("avatar"), async (req, res) => {
  const user = await User.findById(req.body.userId);
  user.avatar = req.file.filename;
  await user.save();

  res.json({ success: true });
});