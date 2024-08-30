import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default function App() {
  const [data, setData] = useState([]);
  const urlBase = 'https://rickandmortyapi.com/api';

  const getData = () => {
    fetch(`${urlBase}/character`)
      .then(response => response.json())
      .then(dataApi => setData(dataApi.results))
      .catch(err => console.error(err));
  };

  const renderItem = ({ item }) => (
    <View style={styles.containerBox}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button onPress={getData} title="Llamar Api" />
      <View style={styles.containerDataApi}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerDataApi: {
      flex: 1, 
      width: '100%', 
      marginTop: 20, 
    },
    containerBox: {
      width: 100,
      height: 100,
      backgroundColor: 'coral',
      marginBottom: 10,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
