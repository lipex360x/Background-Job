import AppError from '@shared/errors/AppError'
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository'
import CreateUserService from './CreateUserService'

let fakeRepository: FakeUsersRepository
let createUserService: CreateUserService

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeRepository = new FakeUsersRepository()
    createUserService = new CreateUserService(fakeRepository)
  })

  it('should ...', async () => {
    await expect(1 + 1).toBe(2)
  })
})
