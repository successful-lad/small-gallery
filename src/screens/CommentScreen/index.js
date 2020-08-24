import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable, ImageBackground, TextInput} from  'react-native';
import {getSingleImages} from "../../Api";

const CommentScreen = ({navigation, route}) => {
  const [comm, setComm] = useState([]);
  const [newComm, setNewComm] = useState({name: 'Ваше имя', text: 'Ваш комментарий'});

  const { img } = route.params;

  useEffect(() => {
    const { img } = route.params;

    (async () => {
      const res = await getSingleImages(img.id);
      if (res.comments.length <= 1) {
        // setComm([
        //   res.comments,
        //   {"date": 1578054737927, "id": 153, "text": "Коментарий рандомный"},
        //   {"date": 1578054737927, "id": 153, "text": "Коментарий рандомный"},
        //   {"date": 1578054737927, "id": 153, "text": "Коментарий рандомный"},
        //   {"date": 1578054737927, "id": 153, "text": "Коментарий рандомный"},
        // ])
      } else {
        // setComm(res.comments);
      }
    })()
  }, []);

  const addComment = () => {
    setComm(comm =>[...comm, newComm]);
    setNewComm({name: 'Ваше имя', text: 'Ваш комментарий'});
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{uri: img.url}} style={styles.image} />
      <View style={styles.wrapper}>
          {comm.map((comment, index) => (
            <View style={styles.commentContainer} key={index}>
              <Text style={styles.date}>{comment.date}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.textInput}
            value={newComm.name}
            onChangeText={name => setNewComm(value => ({...value, name}))}
            // clearTextOnFocus={true}
            onFocus={()=> {setNewComm(value => ({...value, name:''}))}}
          />
        </View>
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.textInput}
            value={newComm.text}
            onChangeText={text => setNewComm(value => ({...value, text}))}
            onFocus={()=> {setNewComm(value => ({...value, text:''}))}}
          />
        </View>
        <Pressable
          onPress={addComment}
          style={styles.addCommentButton}
        >
          <Text style={styles.buttonText}>Добавить комментарий</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: "column"
  },
  image: {
    resizeMode: "contain",
    justifyContent: "center",
    height: 300,
  },
  text: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold"
  },
  wrapper: {
    padding: 20,
  },
  date: {
    color: '#999999',
  },
  commentText: {
    marginTop: 5,
    fontSize: 18,
  },
  commentContainer: {
    marginBottom: 30,
  },
  inputStyle: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
  },
  textInput: {
    height: '100%',
    minHeight: 30,
  },
  addCommentButton: {
    padding: 10,
   width: '100%',
   backgroundColor: '#4997D0',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  }
});
export default CommentScreen;
