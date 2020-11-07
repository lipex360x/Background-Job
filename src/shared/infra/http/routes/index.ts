import Router from 'express'

import UsersRoutes from '@modules/users/routes/users.routes'

const router = Router()

router.use('/users', UsersRoutes)

export default router
