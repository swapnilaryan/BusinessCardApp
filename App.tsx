import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BusinessCardList from "./src/components/pages/businessCardList";
import AddBusinessCard from "./src/components/pages/addBusinessCard";
import BusinessCardDetails from "./src/components/pages/businessCardDetails";
import {RootStackParamList} from "./constants/type";
import BusinessCardContextProvider from "./src/context/businessCardContext";

const Stack = createStackNavigator<RootStackParamList>();

const App = ():JSX.Element => {
  return (
    <BusinessCardContextProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="BusinessCardList" component={BusinessCardList}/>
                <Stack.Screen name="AddBusinessCard" component={AddBusinessCard} />
                <Stack.Screen name="BusinessCardDetails" component={BusinessCardDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    </BusinessCardContextProvider>
  );
}

export default App;