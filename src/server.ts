import express from "express";
import { createServer } from "http";
import { Database, baseUrl, port } from "./config";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import { ChatSocket } from "./socket/chat.socket";

const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "x-workspace-secret-id",
  ],
  credentials: true,
};

class Server {
  private app: express.Application;
  private httpServer: ReturnType<typeof createServer>;
  private io: SocketIOServer;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.io = new SocketIOServer(this.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: [
          "Content-Type",
        ],
        credentials: true,
      },
    });

    this.configuration();
  }

  private configuration() {
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
  }

  private async connect() {
    try {
      await Database.connection();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public start() {
    this.connect();
    new ChatSocket(this.io)
    this.httpServer.listen(port, () => {
      console.info(`Server started at ${baseUrl}:${port}`);
    });
  }
}

const server = new Server();
server.start();