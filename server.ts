import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

// প্রতিটি রুমে কতজন আছে তা ট্র্যাক করার জন্য
const roomUsers: { [key: string]: Set<string> } = {};

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("join-group", (groupId: string) => {
    socket.join(groupId);

    // ১. রুমের ইউজার সেট তৈরি বা আপডেট করা
    if (!roomUsers[groupId]) {
      roomUsers[groupId] = new Set();
    }
    roomUsers[groupId].add(socket.id);

    // ২. ওই গ্রুপের সবাইকে জানানো যে সংখ্যা বেড়েছে
    io.to(groupId).emit("update-user-count", roomUsers[groupId].size);

    console.log(
      `User ${socket.id} joined group: ${groupId}. Total: ${roomUsers[groupId].size}`,
    );
  }); // এখানে ব্র্যাকেটটি ঠিক করা হয়েছে

  // ডিসকানেক্ট হওয়ার ঠিক আগে কোন কোন রুমে ছিল তা চেক করা
  socket.on("disconnecting", () => {
    const rooms = Array.from(socket.rooms);
    rooms.forEach((groupId) => {
      if (roomUsers[groupId]) {
        roomUsers[groupId].delete(socket.id);
        // রুম মেম্বার কমে গেলে সবাইকে আপডেট পাঠানো
        io.to(groupId).emit("update-user-count", roomUsers[groupId].size);
      }
    });
  });

  socket.on("send-message", (data) => {
    io.to(data.groupId).emit("receive-message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
});


const PORT = parseInt(process.env.PORT || "3001", 10);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Socket Server running on port ${PORT}`);
});
