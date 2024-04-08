import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getLoggedInUserDetails,
  getAllUsers,
  getUserDetails
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", isLoggedIn,getLoggedInUserDetails);
router.get("/all", getAllUsers);
router.get("/doctor/:id",getUserDetails)
router.get("/doctor",getUserDetails)
export default router;
