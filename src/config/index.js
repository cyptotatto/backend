import dotenv from "dotenv";
dotenv.config();

export default {
  host: {
    cors: process.env.CORS_ORIGIN,
    port: Number(process.env.PORT),
  },
  db: {
    url: process.env.DB_URL,
  },
};
