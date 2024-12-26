import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoute); // /api/v1/user/login

app.listen(8001, function () {
  console.log("Server is running on port 8001...");
});
