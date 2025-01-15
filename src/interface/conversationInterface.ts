export interface InputConversationInterface {
  created_at: Date;
  updated_at: Date;
}

export interface ConversationInterface extends InputConversationInterface {
  id: number;
  deleted_at?: Date;
}
