import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Example Screens Imports
import BasicExampleScreen from './src/BasicExample';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>React Native Scroll Picker</Text>
      <Button
        title="Basic Example"
        onPress={() => props.navigation.navigate('BasicExample')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BasicExample" component={BasicExampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
