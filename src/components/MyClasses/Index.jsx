import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FONTS from "../../constants/Fonts";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";
import { deleteClass , loadFirebase, selectClass, updateFirebase } from '../../store/actions/myClasses.actions';
import { loadUserData } from "../../store/actions/auth.actions";

const MyClasses = () => {

  const dispatch = useDispatch()

  // Item select to pass it to modal pop-up
  const [itemSelected, setItemSelected] = useState({});

  // State for pop-up modal
  const [modalVisible, setModalVisible] = useState(false);

  // State in redux to save a list of classes selected from MonthClasses and DayClasses screens
  const myClasses = useSelector( state => state.myClasses.myClasses )

  // Selected class to show on pop-up modal
  const selectedClass = useSelector( state => state.myClasses.selectedClass )

  // User's profile email
  const userEmail = useSelector( state => state.auth.userEmail )
  const userId = useSelector( state => state.auth.userId )
  
  // Function to open Modal
  const onHandlerModal = (key) => {
    let currentItem = myClasses.filter((item) => item.key === key)[0];
    dispatch( selectClass(currentItem) )
    setItemSelected(currentItem);
    setModalVisible(!modalVisible);
  };

  // Funtion to delete item from state.myClasses in pop-up modal
  const deleteItem = () => {
    dispatch( deleteClass(selectedClass) )
    setModalVisible(!modalVisible);
  };

  // When the App is loaded and the component is rendered, loadFirebase() calls and brings user's classes by its userId
  React.useEffect(() => {
    dispatch( loadFirebase(userId) )
  }, [])

  // Update user's classes in Firebase when myClasses list state changes
  React.useEffect(() => {
    dispatch( updateFirebase(myClasses, userEmail, userId) )
  }, [myClasses])

  // Load user's data from Firebase when component is rendered
  React.useEffect(() => {
    dispatch( loadUserData(userId) )
  }, [])
  
  return (
    <>
      <Text style={styles.title}>Mis próximas clases</Text>

      <View style={styles.container}>

        { myClasses === null || myClasses.length === 0 ? (
          <Text style={styles.emptyList}>No has agregado clases</Text>

        ) : (
          <View style={styles.listContainer}>
            <FlatList
              contentContainerStyle={styles.contentContainer}
              data={myClasses}
              keyExtractor={(item) => item.key}
              renderItem={(itemData) => {
                return (
                  <ClassItem
                    itemData={itemData}
                    onHandlerModal={onHandlerModal}
                  />
                );
              }}
            />
          </View>
        )}

      </View>

      <DeleteModal
        itemSelected={itemSelected}
        modalVisible={modalVisible}
        onHandlerModal={onHandlerModal}
        deleteItem={deleteItem}
      />
    </>
  );
};

export default MyClasses;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  emptyList: {
    marginVertical: 100,
    color: "gray",
  },

  title: {
    marginTop: 20,
    fontSize: 25,
    textAlign: "center",
    fontFamily: FONTS.comfortaaBold,
  },

  listContainer: {
    width: "90%",
    marginBottom: 300
  },

  contentContainer: {
    alignItems: "center",
  },
});