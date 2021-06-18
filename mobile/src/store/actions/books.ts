import { AppDispatch } from '../index';
import { bookActions } from '../books';
import api from '../../services/api';
import { Book, ResponseBook } from '../../interfaces/Book'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchBookData = () => {
    return async(dispatch: AppDispatch) => {
        const fetchBooks = async () => {
            const token = await AsyncStorage.getItem('@token')
            const response: ResponseBook = await api.get('books', { headers :  {"Authorization" : `Bearer ${token}`} })
            const result: Book[] = response.data
            return result.reverse()
        }
        try {
            const bookData = await fetchBooks();
            dispatch(
                bookActions.fetchBooks({books: bookData})
            )
        } catch (error) {
            console.log(error)
        }
    }
}