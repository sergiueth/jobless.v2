const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("../routes/userRoutes");

const app = express(); // Create an instance of express
const PORT = process.env.PORT || 3000;

const MONGODB_URI =
  "mongodb+srv://sergiuioanbucur:Password123@cluster0.kmake7d.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use routes
app.use("/", userRoutes); // You can add more routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
