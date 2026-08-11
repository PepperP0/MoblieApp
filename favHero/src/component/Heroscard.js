import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme'; 

const Herocard = ({ item, isFav, onToggleLike }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: item.uri }}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>
          {item.name}
        </Text>
        <TouchableOpacity onPress={() => onToggleLike(item.id)}>
          <Text style={[styles.heart, isFav && styles.heartON]}>
            {'\u2665'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: { width: '100%', aspectRatio: 1 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  title: {
    flex: 1,
    color: colors.text,
    fontSize: 18,
    marginRight: 8,
  },
  heart: { fontSize: 30, color: colors.muted, opacity: 0.35 },
  heartON: { color: colors.heart, opacity: 1 }
});

export default Herocard;