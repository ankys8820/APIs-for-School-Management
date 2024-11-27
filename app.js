import express from "express";
import dotent from "dotenv";
import schoolRoutes from "./routes/schoolRoutes.js";

dotent.config();
const app = express();
const port = process.env.PORT || 8000;

// middlewaresx
app.use(express.json());

// Routes
app.use("/api", schoolRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
