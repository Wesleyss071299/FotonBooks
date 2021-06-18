import React from 'react'
import { Image } from 'react-native'
// Styled Components
import { Container, ImageBox, Title, Author, TitleBox } from './styles'

interface Props {
    title: string,
    author: string,
    url: string,
    onPress: () => void
}

const BookItem: React.FC<Props> = ({ title, author, url, onPress}) => {
    return (
        <Container onPress={onPress}>
            <ImageBox>
                <Image source={{uri: `http://192.168.1.7:3333/uploads/${url}`}} style={{width: 100, height: 160}} resizeMode='cover'/>
            </ImageBox>
            <TitleBox>
                <Title>{title}</Title>
                <Author>by {author}</Author>
            </TitleBox>
        </Container>
    )
}

export default BookItem
