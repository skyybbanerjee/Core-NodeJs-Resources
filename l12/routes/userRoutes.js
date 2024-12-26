import express from "express";
import { userLogin } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router();

// Define the POST route for user login
router
  .route("/login")
  .post(isAuthenticated,userLogin)
  .get((req, res) => {
    //! Totally optional
    res.status(200).send("This is a test route for GET /login");
  });


export default router;
