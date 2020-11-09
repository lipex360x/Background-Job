import { inject, injectable } from 'tsyringe'

// import AppError from '@shared/errors/AppError'

import User from '@modules/users/entities/User'
import IUsersRepository from '@modules/users/repositories/interfaces/IUsersRepository'
import AppError from '@shared/errors/AppError'

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

  async execute ({ name, email }: Request): Promise<User> {
    const getUser = await this.repository.findByEmail({ email })

    if (getUser) {
      throw new AppError('Email Already exists')
    }

    const user = await this.repository.create({ name, email })

    return user
  }
}
