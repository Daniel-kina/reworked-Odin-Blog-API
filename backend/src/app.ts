import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import stdRouter from "./routes/stdRouter.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", stdRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("Central Error Caught:", err.message);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});
