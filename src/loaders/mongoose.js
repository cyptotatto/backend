import mongoose from "mongoose";
import config from "../config/index.js";

export async function connectDB() {
  return mongoose.connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.connection.on("error", (error) => {
  console.error("mongoose connect error", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("mongoose connect disconnected. retry to connnect");
  connectDB();
});
