import { Schema, model, Document } from 'mongoose'

export interface BookInterface extends Document {
    userId: string  
    cover: string
    imageName: string
    image:string
    title: string
    author: string
    description: string
}

const BookSchema = new Schema({
  userId: String,
  cover: String,
  imageName: String,
  title: String,
  author: String,
  description: String
}, {
  timestamps: true
})

export default model<BookInterface>('Book', BookSchema)
