import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import receptionRoutes from "./routes/reception.routes.js";
import pdfRoutes from "./routes/pdf.routes.js";
import emailRoutes from "./routes/email.routes.js";
import documentRoutes from "./routes/document.routes.js"

dotenv.config();
const app = express();

// Logging middleware
app.use(morgan("dev"));
app.set("trust proxy", 1);

// CORS middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "*","https://fullstack-medvault.vercel.app/"],
    credentials: true,
    httpOnly: false,
    optionSuccessStatus: 200,
    sameSite: "None",
    secure: true,
    methods: "GET, POST, PUT, DELETE", // Specify the allowed HTTP methods
    allowedHeaders: "Content-Type, Authorization",
    cookie: {
      secure: true,
      sameSite: "None",
    },
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/patient", patientRoutes);
app.use("/api/v1/reception", receptionRoutes);
app.use("/api/v1/pdf", pdfRoutes);
app.use("/api/v1/send", emailRoutes);
app.use("/api/v1/patient", documentRoutes);

app.get("/ping", (_req, res) => {
  res.send("Pong");
});

app.get("/", (_req, res) => {
  res.send("This is a MedVault API.");
});

app.use("/ping", (req, res) => {
  res.send("pong");
});

app.all("*", (req, res) => {
  res.status(404).send("OOPS!! 404 Page Not Found");
});

export default app;
