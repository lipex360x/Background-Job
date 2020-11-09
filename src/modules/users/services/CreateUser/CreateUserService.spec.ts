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

  it('should able to create a new user', async () => {
    const user = await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com'
    })

    expect(user).toHaveProperty('id')
  })

  it('should not be able to create a user with duplicated email', async () => {
    await createUserService.execute({
      name: 'John Doe',
      email: 'john@mail.com'
    })

    await expect(
      createUserService.execute({
        name: 'John Tre',
        email: 'john@mail.com'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
