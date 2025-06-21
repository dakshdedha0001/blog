const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { port, mongoURI } = require("./config");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.error("Mongo error:", err));
