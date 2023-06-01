import React from "react"
import { View, Text } from "react-native"
import { Card } from "react-native-paper"

import styles from "./style"

export default function RestaurantDetails({ route }) {
	const { restaurant } = route.params

	const getCuisines = () => {
		if (Array.isArray(restaurant.cuisines) && restaurant.cuisines.length > 0) {
			return restaurant.cuisines.map((cuisine) => cuisine.name.en).join(", ")
		} else if (
			typeof restaurant.cuisines === "object" &&
			restaurant.cuisines.en
		) {
			return restaurant.cuisines.en
		} else {
			return restaurant.mealType
		}
	}

	return (
		<View style={styles.container}>
			<Card.Cover
				source={
					restaurant.image && restaurant.image.url
						? { uri: restaurant.image.url }
						: null
				}
				style={styles.image}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.name}>
					{typeof restaurant.name === "string" ? restaurant.name : ""}
				</Text>
				<Text style={styles.text}>
					Address:{" "}
					{typeof restaurant.addressInfo.address === "string"
						? restaurant.addressInfo.address
						: ""}
				</Text>
				<Text style={styles.email}>
					Contacts:{" "}
					{typeof restaurant.contacts.email === "string"
						? restaurant.contacts.email
						: ""}
				</Text>
				<Text style={styles.text}>
					Contacts:{" "}
					{typeof restaurant.contacts.phoneNumber === "string"
						? restaurant.contacts.phoneNumber
						: ""}
				</Text>
				<Text style={styles.text}>Cuisines: {getCuisines()}</Text>
			</View>
		</View>
	)
}
