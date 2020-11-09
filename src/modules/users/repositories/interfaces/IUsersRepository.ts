import User from '@modules/users/entities/User'

export interface CreateProps {
  name: string
  email: string
}

export interface FindByEmailProps {
  email: string
}

export default interface IUsersRepository {
  create(data: CreateProps): Promise<User>
  findByEmail(data: FindByEmailProps): Promise<User>
}
