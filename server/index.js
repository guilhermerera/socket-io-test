import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: "*",
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

httpServer.listen(3000, console.log("Server Online running on port 3000"));
