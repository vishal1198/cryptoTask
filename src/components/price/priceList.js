import React from 'react';
import {View, Text} from 'react-native';
import {t} from 'react-native-tailwindcss';
import {decimal} from '../../helpers/functions';
export default function priceList({
  symbol,
  name,
  priceUsd,
  changePercent24Hr,
  SNo,
}) {
  return (
    <View
      style={[
        t.flexRow,
        t.justifyBetween,
        t.p3,
        {borderBottomColor: 'grey', borderBottomWidth: 0.5},
      ]}>
      <View style={[t.flexRow, t.flexAuto]}>
        <Text style={[t.mR3, t.mL3]}>{SNo}</Text>
        <View
          style={[
            {borderWidth: 1, borderRadius: 25, height: 25, width: 25},
            t.itemsCenter,
            t.justifyCenter,
            t.mR2,
          ]}>
          <Text style={{fontSize: 8}}>{symbol}</Text>
        </View>
        <Text style={{fontSize: 15}}>{name}</Text>
      </View>
      <View style={[t.flexRow, t.justifyEnd, t.flex1]}>
        <Text style={[{fontSize: 15}, t.fontBold]}>
          ${decimal(parseFloat(priceUsd))}
        </Text>
      </View>
      <View style={[t.flexRow, t.justifyEnd, t.flex1]}>
        <Text style={[t.textRed500, {fontSize: 15}]}>
          {decimal(parseFloat(changePercent24Hr))}%
        </Text>
      </View>
    </View>
  );
}
