import React from 'react'
import { Container, Image, HeaderBox, TitleBox, Title, Author, DescriptionBox, Description, BottomBox } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Book } from '../../interfaces/Book';
import { Svg, Path } from 'react-native-svg';
import OptionBox from '../../components/OptionBox';



const Details: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation()
    const routeParams = route.params as Book
    return (
        <Container>
            <HeaderBox>
                <Svg width="100%" height="250" viewBox="0 0 375 282" fill="none"  preserveAspectRatio="none" strokeWidth="0.15" stroke="rgb(0,0,0)">
                    <Path d="M-1 0H375V182C375 237.228 330.228 282 275 282H-1V0Z" fill="#FFF6E5"/>
                </Svg>
                <AntDesign name="arrowleft" size={24} color="black"  onPress={() => navigation.goBack()} style={{marginTop: 50, position: 'absolute', alignSelf: 'flex-start', marginLeft: 20}}/>
                <Image source={{uri: `http://192.168.1.7:3333/uploads/${routeParams.cover}`}} />
            </HeaderBox>
            <TitleBox>
                <Title>{routeParams.title}</Title>
                <Author>{routeParams.author}</Author>
            </TitleBox>
            <DescriptionBox>
                <Description>
                    {routeParams.description}
                </Description>
            </DescriptionBox>
            <BottomBox>
                <OptionBox/>
            </BottomBox>
        </Container>
    )
}

export default Details


