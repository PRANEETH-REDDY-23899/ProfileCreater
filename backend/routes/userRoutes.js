import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
// router.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
//   console.log(req.params.firstNumber + req.params.secondNumber);
//   let firstNo = parseInt(req.params.firstNumber),
//       secondNo = parseInt(req.params.secondNumber);
//   res.json({"Addition" : firstNo + secondNo});
// });

export default router;
