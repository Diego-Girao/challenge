import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import { SafeAreaView, View, TouchableOpacity, FlatList } from "react-native"
import {
	Appbar,
	Searchbar,
	Card,
	Paragraph,
	Divider,
	IconButton,
} from "react-native-paper"

import { useSelector, useDispatch } from "react-redux"
import { addFavorite, removeFavorite } from "../../Redux/favoriteSlice"

import styles from "./style"

export default function Restaurants({ navigation }) {
	const [restaurants, setRestaurants] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [initialRestaurants, setInitialRestaurants] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const favorites = useSelector((state) => state.favorites)
	const dispatch = useDispatch()

	const isFavorite = (restaurant) => {
		return favorites.some((fav) => fav._id === restaurant._id)
	}

	const toggleFavorite = (restaurant) => {
		if (isFavorite(restaurant)) {
			dispatch(removeFavorite({ restaurantId: restaurant._id }))
		} else {
			dispatch(addFavorite({ restaurant }))
		}
	}

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

	const renderRestaurantItem = ({ item }) => (
		<React.Fragment key={item._id}>
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("RestaurantDetails", { restaurant: item })
				}
			>
				<Card style={styles.card}>
					<Card.Content style={styles.cardContent}>
						<View style={styles.cardImageContainer}>
							<Card.Cover
								source={
									item.image && item.image.url ? { uri: item.image.url } : null
								}
								style={styles.cardCover}
							/>
						</View>
						<View style={styles.textContainer}>
							<Card.Title titleStyle={styles.cardTitle} title={item.name} />
							<Paragraph style={styles.mealType}>{item.mealType}</Paragraph>
						</View>
						<IconButton
							icon="heart"
							iconColor={isFavorite(item) ? "#2563eb" : "#cbd5e1"}
							onPress={() => toggleFavorite(item)}
						/>
					</Card.Content>
				</Card>
			</TouchableOpacity>
			<Divider />
		</React.Fragment>
	)

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
			) : restaurants.length > 0 ? (
				<FlatList
					data={restaurants}
					renderItem={renderRestaurantItem}
					keyExtractor={(item) => item._id}
					showsVerticalScrollIndicator={false}
				/>
			) : (
				<View style={styles.emptyContainer}>
					<Paragraph>No restaurants found.</Paragraph>
				</View>
			)}
		</SafeAreaView>
	)
}
