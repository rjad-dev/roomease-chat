export interface InputMessageInterface {
    conversation_id: number;
    sender_id: number;
    content: string;
    type?: "text" | "image" | "video" | "file";
    read_at?: Date;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface MessageInterface extends InputMessageInterface {
    id: number;
    deleted_at?: Date;
  }
  