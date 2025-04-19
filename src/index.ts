import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./data-source";
import logger from "./utils/winston";
import morganMiddleware from "./middleware/morgan";
import routerV1 from "./routes";
import errorHandler from "./middleware/errorHandler";
dotenv.config();

const app = express();

const port = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send("Express + TypeScript + MongoDB API");
});

app.use("/api", routerV1);
app.use(errorHandler);

// app.get("*", (req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });
connectToDatabase()
  .then(() => {
    logger.info("Connected to MongoDB successfully");
    app.listen(port, () => {
      logger.info(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
