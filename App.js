import React from 'react';
import {SafeAreaView, View, Text, Image, FlatList} from 'react-native';
import {main} from './style/myStyle';
import sourceData from './source.json';
import ProductItem from './components/ProductItem';

const App = () => {

  const renderedFunc = ({ item }) => <ProductItem product={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={main.container}>
        <View style={main.header}>
          <Text style={main.headerText}>SCIENCE</Text>
        </View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={sourceData}
          renderItem={renderedFunc}
        />
        <View style={main.footer}>
          <Image
            style={main.image}
            source={require('./style/clarusway.jpeg')}
            resizeMode="center"
          />
          <Text style={main.footerText}>CLARUSWAY</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
