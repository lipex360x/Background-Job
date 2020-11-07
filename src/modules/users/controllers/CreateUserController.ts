import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateUserService from '../services/CreateUser/CreateUserService'

export default class CreateUserController {
  async show (request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService)

    const user = await createUser.execute()

    return response.json(user)
  }
}
