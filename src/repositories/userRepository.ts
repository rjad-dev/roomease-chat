import { InputUserInterface, UserInterface } from '../interface';
import Model from '../models';
import { BaseRepository } from './baseRepository';

export class UserRepository extends BaseRepository<
  InputUserInterface,
  UserInterface
> {
	constructor() {
		super(Model.User);
	}
}