import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Props Description
import {propsDescription} from './src/availableProps';

// Example Screens Imports
import BasicExampleScreen from './src/BasicExample';
import BottomSheetExampleScreen from './src/BottomSheetExample';
import {ScrollView} from 'react-native-gesture-handler';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.Title}>React Native Scroll Picker</Text>
      <Button
        title="Basic Example"
        onPress={() => props.navigation.navigate('Basic Example')}
      />
      <Button
        title="Bottom Sheet Example"
        onPress={() => props.navigation.navigate('Bottom Sheet Example')}
      />
      <Text style={{marginTop: 25, fontSize: 22, fontWeight: '600'}}>
        Props Description
      </Text>
      <View style={{height: 300, backgroundColor: 'pink'}}>
        <ScrollView indicatorStyle="black">
          {propsDescription.map(({name, desc}) => {
            return (
              <View style={styles.PropsItem}>
                <Text style={styles.PropsItemTitle}>{name}</Text>
                <Text style={styles.PropsItemDescription}>{desc}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
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

const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
  },
  PropsItem: {
    width: '80%',
    marginTop: 16,
  },
  PropsItemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  PropsItemDescription: {
    fontSize: 14,
  },
});

export default App;
