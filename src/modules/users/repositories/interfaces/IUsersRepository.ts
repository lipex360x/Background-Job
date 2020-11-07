import User from '@modules/users/entities/User'

export interface CreateProps {
  name: string
  email: string
}

export default interface IUsersRepository {
  create(data: CreateProps): Promise<User>
}
