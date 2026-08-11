import { useState } from 'react';
import { FlatList,Image,StyleSheet,Text,View,Pressable,Modal,ActivityIndicator,TextInput,
} from 'react-native';

const students = [
  {
    id: '1',
    name: 'Bat Man',
    img: 'https://i.pinimg.com/736x/00/a1/8f/00a18f31a98590bfca06dafc7744cb34.jpg',
    detail:'อัศวินรัตติกาล'
  },
  {
    id: '2',
    name: 'Robin',
    img: 'https://i.pinimg.com/736x/d0/e9/7c/d0e97c848cdacaa48ecd3a79cf00dcb1.jpg',
    detail:'ผู้กอบกู้ยาเสพติดจากเด็กๆ'
  },
  {
    id: '3',
    name: 'Joker',
    img: 'https://i.pinimg.com/736x/b8/cf/88/b8cf88739d56d9810438fdd7d9df9d8b.jpg',
    detail:'วายร้ายคู่ปรับอัศวินรัตติกาล'
  },
  {
    id: '4',
    name: 'HarleyQueen',
    img: 'https://i.pinimg.com/736x/14/7a/bf/147abf4c3f45f88b19c805c72c58ca1a.jpg',
    detail:'เมียตัวตลก'
  },
  {
    id: '5',
    name: 'Zoro',
    img: 'https://i.pinimg.com/1200x/94/5b/d3/945bd33ba2988d74c33f0ada45e77902.jpg',
    detail:'นักดาบอันดับหนึ่ง'
  },
];

export default function App() {
  const [sel, setSel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  // ค้นหาแบบ Real-time
  const filterStudent = students.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );

  const open = (st) => {
    setSel(st);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={s.box}>
        <TextInput
          style={s.input}
          placeholder="Search"
          value={name}
          onChangeText={setName}
        />
      </View>

      <FlatList
        data={filterStudent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => open(item)}>
            <View style={s.row}>
              <Image source={{ uri: item.img }} style={s.avatar} />
              <Text style={s.name}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />

      <Modal
        visible={!!sel}
        animationType="slide"
        onRequestClose={() => setSel(null)}
      >
        <View style={s.center}>
          {loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <>
              <Image source={{ uri: sel?.img }} style={s.bigAvatar} />

              <Text style={s.title}>{sel?.name}</Text>

              <Text style={s.detail}>{sel?.detail}</Text>
            </>
          )}

          <Pressable style={s.closeBtn} onPress={() => setSel(null)}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    paddingTop:50,
    padding: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 20,
  },

  name: {
    fontSize: 20,
  },

  bigAvatar: {
    width: 250,
    height:250,
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },


  closeBtn: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
  detail:{
   fontSize: 28,
   fontWeight: 'bold',
  },
});
  //โค้ดเพิ่มรูปตัวละคร
  //<FlatList data ={students}keyExtractor={(it) => it.id}
  //    renderItem={({item}) => (<View style={s.row}><Image source={{uri:item.img}}style={s.avatar}/>
  //     <Text style={s.name}>{item.name}</Text></View>
  //  )}/>
