import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { DATA } from './Data';
import Row from './Components/Row';
import { useEffect, useState } from 'react';
import Search from './Components/Search';

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    console.log(search)
    console.log(DATA)
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
    console.log(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
