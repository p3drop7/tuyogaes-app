import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

import COLORS from '../../constants/Colors'
import React from 'react'

const DeleteModal = ({deleteItem, modalVisible, onHandlerModal}) => {
  return (
		<Modal animationType="slide" visible={modalVisible}>
			<View style={styles.modalContainer1}>
				<View style={styles.modalContainer2}>
					<Text style={styles.modalText}>¿Deseas cancelar esta clase?</Text>

					<Pressable style={styles.cancelPressable}
						onPress={() => {
							deleteItem();
						}}
					>
						<Text style={styles.modalCancelPressableText} >Cancelar</Text>
					</Pressable>

					<Pressable style={styles.returnPressable}
						onPress={() => {
							onHandlerModal();
						}}
					>
						<Text style={styles.modalReturnPressableText}>Salir</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
}

export default DeleteModal

const styles = StyleSheet.create({
	modalContainer1: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},

	modalContainer2: {
		width: 320,
		height: '40%',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: COLORS.darkGreen,
		backgroundColor: COLORS.lightGreen,
	},

	modalText: {
		fontSize: 18,
		marginVertical: 10,
		fontFamily: 'comfortaa-semibold'
	},

	cancelPressable: {
		height: 55,
		width: 120,
		backgroundColor: COLORS.lightRed,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 10,
	},

	modalCancelPressableText: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'comfortaa-bold'
	},

	returnPressable: {
		height: 55,
		width: 120,
		backgroundColor: COLORS.lightGray,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		borderRadius: 10,
	},

	modalReturnPressableText: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'comfortaa-bold'
	}
})