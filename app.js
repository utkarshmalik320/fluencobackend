import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

export const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", 
    credentials: true,
  })
);
// app.use(express.json({ limit: "16kb" }));

// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);

app.get("/", (req,res)=>{
  res.send("Welcome to the ");
})

export default app;
