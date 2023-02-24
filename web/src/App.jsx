import "./App.css";

import { useState } from "react";
import socket from "./socket/socket";

socket.on("connect", () => {
	console.log(socket.id);
});
socket.emit("alert", { msg: "Os cara é brabo" });
socket.on("response_alert", (data) => {
	console.log(data.msg);
});

function App() {
	const [mensagem, setMensagem] = useState("state");

	socket.on("click-response", (data) => {
		if (data.msg === 69) {
			setMensagem("MEIA NOVE KKK");
		} else {
			setMensagem(data.msg);
		}
	});

	function handleClick() {
		socket.emit("click");
	}

	return (
		<main className='container'>
			<h1
				onClick={() => {
					handleClick();
				}}>
				{mensagem}
			</h1>
		</main>
	);
}

export default App;
