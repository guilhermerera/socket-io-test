import * as dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import express from "express";
const app = express();

const server = app.listen(3000, () => {
	console.log("express server port 3000");
});

const io = new Server(server, {
	cors: {
		origin: process.env.URL,
		methods: ["GET", "POST"]
	}
});

io.on("connection", (socket) => {
	console.log("New User", socket.id);
	socket.on("alert", (data) => {
		console.log(data.msg);
	});
	socket.on("click", () => {
		io.emit("click-response", { msg: Math.floor(Math.random() * 100) });
	});
});
