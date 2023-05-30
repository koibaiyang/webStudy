import express from 'express'
import { getAllUser, cs} from '../controller/user_ctrl.js'

const router = new express.Router()
router.get('/user', getAllUser)
router.get('/cs', cs)

export default router