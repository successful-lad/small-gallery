import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Pressable} from  'react-native';
import { getImagesList } from '../../Api';

const MainScreen = ({navigation}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getImagesList();
      setImages(res);
    })()
  }, []);
  return (
    <ScrollView  style={styles.wrapper}>
      <View style={styles.imagesWrapper}>
        <Text style={styles.headerStyle}>
          Main Screen - TEST APP
        </Text>
        {images.map(img => (
          <Pressable key={img.id} onPress={() => navigation.navigate('CommentScreen', {img})}>
            <Image
              style={styles.img}
              source={{
                uri: `${img.url}`,
              }}
            />
          </Pressable>
          ))}
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
    headerStyle: {
      marginBottom: 20,
    },
    wrapper: {
      display: 'flex',
    },
    imagesWrapper: {
      display: 'flex',
      padding: 20,
      alignItems: 'center'
    },
    img: {
      width: 300,
      height: 200,
      resizeMode: 'contain',
      marginBottom: 30,
    },
});

export default MainScreen;
