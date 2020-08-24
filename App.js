import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen, CommentScreen } from "./src/screens";
const App: () => React$Node = () => {

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="CommentScreen" component={CommentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
