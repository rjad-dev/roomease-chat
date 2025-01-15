import { Server, Socket } from "socket.io";
import { MessageService } from "../service/messageService";
import { InputMessageInterface } from "../interface";

export class ChatSocket {
  private io: Server;
  private chatService: MessageService;

  constructor(io: Server) {
    this.io = io;
    this.chatService = new MessageService();
    this.setupSocketHandlers();
  }

  private setupSocketHandlers() {
    this.io.on("connection", (socket: Socket) => {
      const userId = this.getUserIdFromSocket(socket);

      socket.on("sendMessage", async (data: InputMessageInterface) => {
        await this.handleMessage(socket, userId, data);
      });

      socket.on("typing", (data) => {
        socket.broadcast.emit("userTyping", data);
      });

      socket.on("stopTyping", (data) => {
        socket.broadcast.emit("userTyping", {
          userId: data.userId,
          typing: false,
        });
      });
    });
  }

  private async handleMessage(
    socket: Socket,
    userId: number,
    data: InputMessageInterface
  ) {
    try {
      const message = await this.chatService.sendMessage(data);

      this.io.emit("receiveMessage", {
        id: message.id,
        content: message.content,
        senderId: userId,
        conversationId: message.conversation_id,
        createdAt: message.created_at,
      });
    } catch (error) {
      console.error("Error handling message:", error);
      socket.emit("error", "Failed to send message");
    }
  }

  private getUserIdFromSocket(socket: Socket): number {
    return socket.data.userId;
  }
}
