import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignSelf: "center",
		alignItems: "flex-start",
	},
	image: {
		width: 500,
		height: 250,
		resizeMode: "cover",
	},
	name: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#525252",
		textAlign: "center",
		backgroundColor: "#cbd5e1",
		paddingHorizontal: 85,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		marginTop: 10,
	},
	textContainer: {
		alignSelf: "center",
		gap: 10,
	},
	text: {
		fontSize: 18,
		textTransform: "capitalize",
	},
	email: {
		fontSize: 18,
	},
})

export default styles
