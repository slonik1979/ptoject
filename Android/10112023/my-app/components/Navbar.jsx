import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
  return (
    <View style={стили.navbar}>
      <Text style={стили.text}>{title}</Text>
    </View>
  );
};

const стили = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#0054',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
