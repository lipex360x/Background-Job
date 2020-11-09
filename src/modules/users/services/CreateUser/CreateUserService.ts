import { inject, injectable } from 'tsyringe'

// import AppError from '@shared/errors/AppError'

import User from '@modules/users/entities/User'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'

interface Request{
  name: string
  email: string
}

@injectable()
export default class CreateUserService {
  constructor (
    @inject('UsersRepository')
    private repository: IUsersRepository
  ) {}

  async execute ({ name, email }: Request): Promise<void> {
    // const repoFunctions = await this.repository.function()

  }
}
