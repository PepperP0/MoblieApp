import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export default function HistoryItem({ text, number }) {
  return (
    <View style={styles.Container}>
      {/* แสดงลำดับ และ คำถาม */}
      <Text style={styles.number}>{number}.</Text>
      <Text style={styles.Text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 8,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.cyan,
    marginRight: 10,
    width: 25, 
  },
  Text: {
    fontSize: 16,
    color: colors.text,
    flex: 1, 
  }
});