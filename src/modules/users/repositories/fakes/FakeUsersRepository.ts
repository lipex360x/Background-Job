import { v4 as uuid } from 'uuid'

import User from '@modules/users/entities/User'
import IUsersRepository, { CreateProps } from '../interfaces/IUsersRepository'

export default class FakeUsersRepository implements IUsersRepository {
  private repository: User[] = []

  async create ({ name, email }:CreateProps): Promise<User> {
    const user = new User()

    Object.assign(user, {
      id: uuid(),
      name,
      email,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(user)

    return user
  }
}
