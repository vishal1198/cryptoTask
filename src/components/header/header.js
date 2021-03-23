import React from 'react';
import {View, Text} from 'react-native';
import {t} from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function header({title}) {
  return (
    <View style={[t.itemsCenter, {height: 50}, t.flexRow]}>
      <View style={{marginHorizontal: 10}}>
        <Icon name="bars" size={30} color="black" />
      </View>
      <Text style={[t.fontBold, {fontSize: 20}]}>{title}</Text>
    </View>
  );
}
