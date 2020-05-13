import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Example Screens Imports
import BasicExampleScreen from './src/BasicExample';
import BottomSheetExampleScreen from './src/BottomSheetExample';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>React Native Scroll Picker</Text>
      <Button
        title="Basic Example"
        onPress={() => props.navigation.navigate('Basic Example')}
      />
      <Button
        title="Bottom Sheet Example"
        onPress={() => props.navigation.navigate('Bottom Sheet Example')}
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
        <Stack.Screen name="Basic Example" component={BasicExampleScreen} />
        <Stack.Screen
          name="Bottom Sheet Example"
          component={BottomSheetExampleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
