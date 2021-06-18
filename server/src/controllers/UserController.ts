import { Request, response, Response } from 'express'

import User from '../schemas/User'
import brcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UserController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async store (req: Request, res: Response) : Promise<Response> {
    const { name, email, password } =  req.body
    
    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    const emailIsValid = emailRegex.test(email)
    
    const emailExists = await User.findOne({email})
    if (emailExists) return res.status(400).json({message: "E-mail already registered"})

    if (!emailIsValid) return res.status(400).json({message: "Type a valid email"})
    
    
    const passwordHash = await brcrypt.hash(password, 8)
    const user = await User.create({
      name,
      email,
      password: passwordHash
    })

    return res.json({user: user, message: "User saved successfully"})
  }

  public async login (req: Request, res: Response): Promise<Response> {

    const { email, password } = req.body
    if (!email || !password) return res.status(404).json({message: "Fill all fields"}) 

    const user = await User.findOne({email})
    if (!user) return res.status(404).json({message: "User not found"})

    const validPass = await brcrypt.compare(password, user.password) 
    if (!validPass) return res.status(404).json({message: "Invalid Password"})

    const token = jwt.sign({ id: user.id}, process.env.APP_SECRET, {
      expiresIn: '1d'
    })

    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }

    return res.json(data)
  }
}

export default new UserController()
