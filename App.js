import { View, Text, StyleSheet, FlatList, TextInput, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinItems from './components/CoinItems';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  
  urlApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  
  const loadData = async () => {
    const res = await fetch(urlApi);
    const data = await res.json()
    setCoins(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414"/>
      <View style={styles.header}>
        <Text style={styles.title}> CryptoMarket </Text>
        <TextInput style={styles.searchInput}
              placeholder="Search a coin"
              placeholderTextColor="#858585"
              onChangeText={text => setSearch(text)}
        ></TextInput>
      </View>
      
      <FlatList
      style={styles.list}
        data={
          coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))
        }
        renderItem={({ item }) => { 
           return (
            <CoinItems coin={item}/>
           )
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        
        onRefresh={async () => {
          console.log('refreshing')
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
      
      /> 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    alignItems: 'center', 
    flex: 1,
  },
  title: {
    color: '#fff',
    marginTop: 30,
    fontSize: 20
  },
  list: {
      width: '90%'
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom: 10
  },
  searchInput :{
    color : '#fff',
    borderBottomColor: '#4657CE',
    borderBottomWidth: 1,
    textAlign: 'center',
    width: '40%',
    textAlign: 'center'
  }
  
})

export default App