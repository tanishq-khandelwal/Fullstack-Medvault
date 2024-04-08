import { Router } from "express";
import {
    registerReceptionist,
  loginUser,
  logoutUser,
  getLoggedInUserDetails,
} from "../controllers/reception.controllers.js";
const router = Router();

router.post("/register", registerReceptionist);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/all", getLoggedInUserDetails);

export default router;
