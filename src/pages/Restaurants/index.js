import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState, useRef } from "react"
import { SafeAreaView, View, Animated, TouchableOpacity } from "react-native"
import { Appbar, Searchbar, Card, Paragraph, Divider } from "react-native-paper"
import styles from "./style"

export default function Restaurants({ navigation }) {
	const [restaurants, setRestaurants] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [initialRestaurants, setInitialRestaurants] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const fadeAnim = useRef(new Animated.Value(0)).current

	const apiUrl = "https://api.dev.wdtek.xyz/restaurants"

	useEffect(() => {
		getRestaurants()
	}, [])

	const getRestaurants = async () => {
		try {
			const response = await fetch(apiUrl)
			const data = await response.json()
			setRestaurants(data.docs)
			setInitialRestaurants(data.docs)
			setIsLoading(false)
		} catch (error) {
			console.error("Error fetching restaurants:", error)
			setIsLoading(false)
		}
	}

	const searchRestaurants = (term) => {
		setSearchQuery(term)
		if (term.length >= 3) {
			const filteredRestaurants = initialRestaurants.filter((restaurant) =>
				restaurant.name.toLowerCase().includes(term.toLowerCase())
			)
			setRestaurants(filteredRestaurants)
		} else {
			setRestaurants(initialRestaurants)
		}
	}

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start()
	}, [fadeAnim])

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Appbar style={styles.appBarBackground} mode="center-aligned">
				<Appbar.Content color="#3f3f46" title="Restaurants Challenge" />
			</Appbar>
			<Searchbar
				placeholder="Search restaurants..."
				placeholderTextColor="#a1a1aa"
				value={searchQuery}
				onChangeText={searchRestaurants}
				onIconPress={() => searchRestaurants("")}
			/>
			<Animated.ScrollView
				style={{ opacity: fadeAnim }}
				contentContainerStyle={styles.scrollViewContent}
			>
				{isLoading ? (
					<View style={styles.skeletonContainer}>
						<View style={styles.skeletonCard} />
						<Divider />
						<View style={styles.skeletonCard} />
						<Divider />
						<View style={styles.skeletonCard} />
						<Divider />
						<View style={styles.skeletonCard} />
						<Divider />
					</View>
				) : (
					restaurants.map((restaurant, index) => (
						<React.Fragment key={restaurant._id}>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate("RestaurantDetails", { restaurant })
								}
							>
								<Card style={styles.card}>
									<Card.Content style={styles.cardContent}>
										<View style={styles.cardImageContainer}>
											<Card.Cover
												source={
													restaurant.image && restaurant.image.url
														? { uri: restaurant.image.url }
														: null
												}
												style={styles.cardCover}
											/>
										</View>
										<View style={styles.textContainer}>
											<Card.Title
												titleStyle={styles.cardTitle}
												title={restaurant.name}
											/>
											<Paragraph style={styles.mealType}>
												{restaurant.mealType}
											</Paragraph>
										</View>
									</Card.Content>
								</Card>
							</TouchableOpacity>
							{index !== restaurants.length - 1 && <Divider />}
						</React.Fragment>
					))
				)}
			</Animated.ScrollView>
		</SafeAreaView>
	)
}
