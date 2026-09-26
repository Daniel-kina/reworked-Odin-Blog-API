import dotenv from "dotenv";
dotenv.config();
import express from "express";
import stdRouter from "./routes/stdRouter.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", stdRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log("ERROR OCCURED");
    throw error;
  }

  console.log("Server Running on PORT: " + PORT);
});
