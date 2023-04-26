import {
    StyleSheet,
    Text,
    View

}from 'react-native'

export const Header = () =>{
    return(
        <View style ={styles.input}>
            <Text>
                Pantry Tracker
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'black',
        heigh: '10%'
    },
    headerText:{
        color:'white',
        fontSize:26,
        textAlign: 'center'
    }
    
})