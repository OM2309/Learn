import { WebSocketServer, WebSocket } from "ws";

type SocketData = {
  socket: WebSocket;
  room: string | null;
};

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT });

// Global array to store connected sockets and their room information
const sockets: SocketData[] = [];

wss.on("connection", function connection(socket: WebSocket) {
  console.log("New connection established");

  // Add the new socket to the global array with default room as null
  const socketData: SocketData = { socket, room: null };
  sockets.push(socketData);

  // Handle incoming messages from the socket
  socket.on("message", function (message: string) {
    try {
      const data = JSON.parse(message);

      if (data.type === "join") {
        // Handle room join
        socketData.room = data.room;
        console.log(`Socket joined room: ${data.room}`);
        socket.send(`You have joined room: ${data.room}`);
      } else if (data.type === "chat") {
        // Handle chat message
        if (socketData.room) {
          console.log(`Message in room ${socketData.room}: ${data.message}`);

          // Broadcast the message to all sockets in the same room
          sockets.forEach((s) => {
            if (s.room === socketData.room && s.socket !== socket) {
              s.socket.send(
                `Message from room ${socketData.room}: ${data.message}`
              );
            }
          });
        } else {
          socket.send("You are not in a room. Join a room to chat.");
        }
      } else {
        // Handle unknown message types
        socket.send("Invalid message type.");
      }
    } catch (err) {
      console.error("Error processing message:", err);
      socket.send("Error processing your message.");
    }
  });

  // Handle errors occurring on the socket
  socket.on("error", (error: Error) => {
    console.error("Socket error:", error);
    socket.send("An error occurred on the server.");
  });

  // Handle the close event when the socket disconnects
  socket.on("close", () => {
    console.log("Connection closed");
    // Remove the socket from the global array on disconnection
    const index = sockets.indexOf(socketData);
    if (index !== -1) {
      sockets.splice(index, 1);
    }
  });

  // Send a welcome message to the newly connected socket
  socket.send("Welcome to the WebSocket server!");
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
