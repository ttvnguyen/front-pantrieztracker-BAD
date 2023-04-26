import {
    StyleSheet,
    Text,
    View

}from 'react-native'

import { Header } from '../components/Header'
import { AllItems } from './AllItems'

export const Home = () =>{
    return(
        <View style= {styles.input}>
            <Header/>
            <Text>
                Home
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1
    }
})