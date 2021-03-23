import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
const axios = require('axios').default;
import Header from '../../components/header/header';
import {useRoute} from '@react-navigation/native';
import useData from '../../hook/useData';
import {t} from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-search-box';
import PriceList from '../../components/price/priceList';
export default function Prices() {
  const route = useRoute();
  const [list, setList] = useState([]);
  const [marketCap, setMarketCap] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  var config = {
    method: 'get',
    url: 'https://api.coincap.io/v2/assets',
    headers: {
      Cookie: '__cfduid=d8ae86e2328d692f96bb8abc19064799a1616445559',
    },
  };
  //   const {list, error, refetch} = useData('https://api.coincap.io/v2/assets');
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setList(response.data.data);
      })
      .catch(function (err) {
        console.log(err);
        setError(true);
      });
  }, []);
  useEffect(() => {
    let total = 0;
    list.map(item => {
      total += parseFloat(item.priceUsd);
    });
    setMarketCap(total);
  }, []);
  const refresh = () => {
    setLoading(true);
    axios(config)
      .then(function (response) {
        setList(response.data.data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setError(true);
      });
    return true;
  };
  const decimal = number => {
    return number.toFixed(2);
  };
  const onSearch = searchText => {
    return new Promise((resolve, reject) => {
      console.log(searchText);
      let obj = list.find(o => o.name === searchText);

      console.log(obj);
      setList([obj]);
      resolve();
    });
  };
  const renderList = useCallback(({item, index}) => {
    return (
      <PriceList
        symbol={item.symbol}
        name={item.name}
        priceUsd={item.priceUsd}
        changePercent24Hr={item.changePercent24Hr}
        SNo={index + 1}
      />
    );
  }, []);
  console.log(marketCap);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        alignItems: 'stretch',
      }}>
      <Header title={route.name} />
      <View
        style={[
          {height: 30, backgroundColor: 'white'},
          t.flexRow,
          t.itemsCenter,
          t.justifyCenter,
        ]}>
        <Icon name="angle-down" color={'black'} size={20} />
        <Text style={[t.mL2]}>Global Market Cap: ${decimal(marketCap)}</Text>
      </View>
      <View style={{marginVertical: 3}}>
        <Search onSearch={onSearch} />
      </View>
      <View
        style={[
          t.flexRow,
          t.justifyBetween,
          t.p3,
          {borderBottomColor: 'grey', borderBottomWidth: 0.5},
        ]}>
        <View style={[t.flexRow, t.flexAuto]}>
          <Text style={[t.pL8, {fontSize: 15}]}>{'Name'}</Text>
        </View>
        <View style={[t.flexRow, t.justifyEnd, t.flexAuto]}>
          <Text style={{fontSize: 15}}>{'Price'}</Text>
        </View>
        <View style={[t.flexRow, t.justifyEnd, t.flexAuto]}>
          <Text style={{fontSize: 15}}>{'Change'}</Text>
        </View>
      </View>
      <View style={{flex: 8}}>
        <FlatList
          refreshing={loading}
          data={list}
          onRefresh={refresh}
          onEndReachedThreshold={0.5}
          contentContainerStyle={[t.mT2]}
          keyExtractor={item => item?.id}
          renderItem={renderList}
        />
      </View>
    </View>
  );
}
