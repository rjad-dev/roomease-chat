export interface InputUserInterface {
  email: string;
  username: string;
  password: string;
  phone_number?: string;
  profile_picture?: string;
  role: "landlord" | "tenant";
  is_active?: boolean;
  is_staff?: boolean;
  is_superuser?: boolean;
  last_login?: Date;
}

export interface UserInterface extends InputUserInterface {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
