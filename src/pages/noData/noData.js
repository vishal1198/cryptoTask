import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header/header';
import {useRoute} from '@react-navigation/native';
import {t} from 'react-native-tailwindcss';

export default function NoData() {
  const route = useRoute();

  return (
    <>
      <Header title={route.name} />
      <View style={[t.flex1, t.m5, t.justifyCenter, t.itemsCenter,t.bgGray400]}>
      <Text style={[t.p2, t.fontBold]}>No data to display...</Text>
    </View>
    </>
  );
}
