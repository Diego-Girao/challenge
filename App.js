import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Restaurants from "./src/pages/Restaurants"
import RestaurantDetails from "./src/pages/RestaurantDetails"
import { Provider } from "react-redux"

import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "./src/redux/store"

const Stack = createStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Restaurants" component={Restaurants} />
						<Stack.Screen
							name="RestaurantDetails"
							component={RestaurantDetails}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	)
}
