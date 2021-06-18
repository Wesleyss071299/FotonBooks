import React, { useState, useEffect, useCallback } from 'react'
import { FlatList } from 'react-native'
import { enableScreens } from 'react-native-screens';
import { useNavigation } from '@react-navigation/native';
// Redux
import { fetchBookData } from '../../store/actions/books';
import { bookActions } from '../../store/books';
import { ThemeModeEnum } from '../../store/theme'
import { useAppSelector, useAppDispatch } from '../../store/hooks';
// Components
import Input from '../../components/Input'
import BookItem from '../../components/BookItem'
// Styled Components
import { Container, WelcomeView, WelcomeTitle, Name, InputView } from './styles'
// Icons 
import { EvilIcons } from '@expo/vector-icons'
import { Book } from '../../interfaces/Book';


const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation();

    const books = useAppSelector((state)=> state.books.books)
    const theme = useAppSelector((state)=> state.theme.themeMode)
    const user = useAppSelector((state)=> state.auth.user.name)

    const color = theme === ThemeModeEnum.DARK ? '#FFF' : "#000"
    
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState<Book[]>(books)

    const handleSearch = useCallback((text : string) => {
        setSearch(text)
        const result = books.filter((data) => {
        return data.title.toLowerCase().search(text.toLowerCase()) != -1;
        });
        setFilteredData(result);
    },[search])

        
    useEffect(() => {
        enableScreens(false);
            dispatch(fetchBookData())

        return () => {
            dispatch(bookActions.reset())
        }
    }, [dispatch])

    const renderItem = useCallback(
        ({ item }) => <BookItem title={item.title} author={item.author} url={item.cover} onPress={() => navigation.navigate('Details', {
            cover: item.cover,
            title: item.title,
            author: item.author,
            description: item.description
        })}/>,
        []
    )

    return (
        <Container>
            <InputView>
                <Input multline={false} value={search} onChangeText={handleSearch} >
                    <EvilIcons name="search" size={24} color={color}  style={{marginLeft: 10}}/>
                </Input>
            </InputView>
            <WelcomeView>
                <WelcomeTitle>Hi</WelcomeTitle>
                <Name> {user.charAt(0).toUpperCase() + user.substr(1)} 👋</Name>
            </WelcomeView>
            <FlatList
                style={{marginTop: 38, marginLeft: 20}}
                keyExtractor={(book) => book._id}
                renderItem={renderItem}
                data={search === '' ?  books : filteredData}
                horizontal={false}
                numColumns={3}
            />
        </Container>
    )
}

export default Home