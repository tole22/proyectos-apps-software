import {Router} from 'express'
const router = Router()

import * as userCtrol from '../controllers/user.controller'
import { authJwt, verifySignup } from '../middlewares'

router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted
], userCtrol.createUser)

export default router;