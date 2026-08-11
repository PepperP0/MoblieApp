import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { colors } from '../theme'; 
import { Heros } from '../data'; 
import Herocard from '../component/Heroscard'; 

export default function AllHeros({ Fav, onToggleLike }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Heros} 
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => {
          const isFav = Fav.includes(item.id);

          return (
            <Herocard 
              item={item} 
              isFav={isFav} 
              onToggleLike={onToggleLike} 
            />
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg, 
  },
  list: { padding: 10 },
  row: { justifyContent: 'space-between' },
  
});