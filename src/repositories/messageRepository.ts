import { InputMessageInterface, MessageInterface } from "../interface";
import Model from "../models";
import { BaseRepository } from "./baseRepository";

export class MessageRepository extends BaseRepository<
  InputMessageInterface,
  MessageInterface
> {
  constructor() {
    super(Model.Message);
  }
}
