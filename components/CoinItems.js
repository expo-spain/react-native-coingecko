import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CoinItems = ({coin}) => {
  return (
    <View style={styles.containerItem}>
       <View style={styles.coinName}>
            <Image style={styles.image}
                    source={{uri: coin.image}}/>
            <View style={styles.containerName}>
                <Text style={styles.text}>{coin.name}</Text>
                <Text style={styles.textSymbol}>{coin.symbol}</Text>
            </View>
       </View>
       <Text style={styles.textPrice}>EUR {coin.current_price}</Text>
       <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>{coin.price_change_percentage_24h.toFixed(2)}%</Text>
    </View>
  )
}

const styles = StyleSheet.create({ 
        containerItem: {
            backgroundColor: '#121212',
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        text :{
            color: '#fff'
        },
        image : { 
            width: 30,
            height: 30
        },
        coinName: {
            flexDirection: 'row'
        },
        textSymbol: {
            color: '#434343',
            textTransform: 'uppercase',
        },
        containerName : {
            marginLeft: 10
        },
        pricePercentage: {
            textAlign: 'right'
        },
        textPrice: {
            textAlign: 'right',
            color: '#fff'
        },
        priceUp: {
            color: '#00b5b9'
        },
        priceDown: {
            color: '#fc4422'
        }

})

export default CoinItems