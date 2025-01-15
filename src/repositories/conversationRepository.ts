import {
  ConversationInterface,
  InputConversationInterface,
} from "../interface";
import Model from "../models";
import { BaseRepository } from "./baseRepository";

export class ConversationRepository extends BaseRepository<
  InputConversationInterface,
  ConversationInterface
> {
  constructor() {
    super(Model.Conversation);
  }
}
