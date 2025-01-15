import { InputMessageInterface, MessageInterface } from "../interface";
import { MessageRepository } from "../repositories";

export class MessageService {
  private repository: MessageRepository;
  constructor() {
    this.repository = new MessageRepository();
  }

  async sendMessage(input: InputMessageInterface): Promise<MessageInterface> {
    return this.repository.create({
        ...input,
        created_at: new Date(),
        updated_at: new Date()
    });
  }
}
