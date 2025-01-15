import {
  ConversationParticipantInterface,
  InputConversationParticipantInterface,
} from "../interface";
import Model from "../models";
import { BaseRepository } from "./baseRepository";

export class ConversationParticipantRepository extends BaseRepository<
  InputConversationParticipantInterface,
  ConversationParticipantInterface
> {
  constructor() {
    super(Model.ConversationParticipant);
  }
}
