import React from 'react';
import { Button, Text, View } from 'react-native';
import  {styles}  from '../styles.js';

export default DetailScreen = ({route:{params:{id, name}}, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Screen</Text>
      <Text style={styles.txt}>ID: {id}</Text>
      <Text style={styles.txt}>Name: {name}</Text>
      <Button title='Go Back' onPress={()=>navigation.goBack()} />
    </View>
  );
}