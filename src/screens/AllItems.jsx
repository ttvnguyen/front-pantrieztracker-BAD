
import { useEffect, useState } from "react"
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
// import {SingleItem} from './SingleItem'
// import {Item} from '../components/Item'

export const AllItems = (props) => {
    console.log(`in AllItems ${props}`)
    console.log(`in AllItems at item 0 ${props.items[0]}`)
    return (
        <View>
            <Text>
                All Inventories:
            </Text>
            {props.items.map((item,index) => {
                return(
                    <View key={index} style={styles.card}>
                        <Text style={styles.desc}>Description: {item.item}</Text>
                        <Text>Quantity: {item.qty}</Text>
                        <Text>Image: {item.image}</Text>
                        <Text>Category: {item.category}</Text>
                        <Text>Expiry: {item.expiry}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth:2,
        borderColor: 'black',
        borderRadius:10,
        margin:10,
        padding:10
    },
    desc:{
        color: 'black',
        fontSize: 22,
        fontWeight: '400'

    }
})