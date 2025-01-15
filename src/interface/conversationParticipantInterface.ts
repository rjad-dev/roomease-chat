export interface InputConversationParticipantInterface {
  conversation_id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface ConversationParticipantInterface
  extends InputConversationParticipantInterface {
  deleted_at?: Date;
}
