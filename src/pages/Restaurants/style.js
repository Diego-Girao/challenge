import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
	},
	appBarBackground: {
		backgroundColor: "#cbd5e1",
	},
	scrollViewContent: {
		padding: 10,
	},
	card: {
		marginBottom: 10,
		elevation: 4,
	},
	cardCover: {
		width: 80,
		height: 80,
	},
	cardTitle: {
		margin: 0,
		fontWeight: "bold",
		alignSelf: "stretch",
	},
	cardContent: {
		alignItems: "flex-start",
		flexDirection: "row",
	},
	cardImageContainer: {
		width: 80,
		height: 80,
		marginRight: 5,
	},
	textContainer: {
		flex: 1,
		alignItems: "flex-start",
	},
	mealType: {
		marginTop: -20,
		marginLeft: 16,
	},
	skeletonContainer: {
		marginBottom: 10,
	},
	skeletonCard: {
		width: "100%",
		height: 100,
		backgroundColor: "#e0e0e0",
		marginBottom: 5,
		borderRadius: 4,
	},
})

export default styles
