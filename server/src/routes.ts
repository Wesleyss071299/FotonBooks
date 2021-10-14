import { Router } from 'express'
import BookController from './controllers/BookController'
import UserController from './controllers/UserController'

import multer from 'multer'
import multerConfig from './config/multer'
import { auth } from './middlewares/auth'

const routes = Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.post('/login', UserController.login)

routes.get('/books', auth, BookController.index)
routes.post('/books', auth, upload.single('file'), BookController.store)

export default routes
