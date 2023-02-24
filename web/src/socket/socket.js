import { io } from "socket.io-client";
import getHost from "../getHost";

const SOCKET_URL = getHost();

const socket = io(SOCKET_URL);

export default socket;
