import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/nextjs-upload";

if (!MONGO_URI) {
  throw new Error("لطفاً MONGO_URI را در فایل .env تعیین کنید");
}

// جلوگیری از چندین اتصال همزمان در توسعه
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(MONGO_URI, opts)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
