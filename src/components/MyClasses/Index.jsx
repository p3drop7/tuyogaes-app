import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Dimensions } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import FONTS from "../../constants/Fonts";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";
import { deleteClass , loadFirebase, selectClass, updateFirebase } from '../../store/actions/myClasses.actions';
import { loadUserData } from "../../store/actions/auth.actions";
import COLORS from "../../constants/Colors";

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

  // Load user's data and classes from Firebase when component is rendered
  React.useEffect(() => {
    dispatch( loadFirebase(userId) )
    dispatch( loadUserData(userId) )
  }, [userId])

  // Update user's classes in Firebase when myClasses list state changes
  React.useEffect(() => {
    dispatch( updateFirebase(myClasses, userEmail, userId) )
  }, [myClasses])
  
  return (
    <>
      <Text style={styles.title}>Mis próximas clases</Text>

      <View style={styles.container}>

        { myClasses === null || myClasses.length === 0 || !myClasses ? (
          <Text style={styles.emptyList}>Aún no has agregado clases</Text>

        ) : (
          <View style={styles.listContainer}>
            <FlatList
              contentContainerStyle={styles.contentContainer}
              persistentScrollbar={true}
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
    flex: 1,
    alignItems: "center",
  },

  emptyList: {
    marginVertical: 100,
    color: COLORS.darkGray,
    fontFamily: FONTS.comfortaaLight
  },

  title: {
    marginTop: 20,
    fontSize: Dimensions.get('screen').width * 0.06,
    textAlign: "center",
    fontFamily: FONTS.comfortaaBold,
    color: COLORS.darkGray
  },

  listContainer: {
    width: "90%",
    marginBottom: 0
  },

  contentContainer: {
    alignItems: "center",
    marginBottom: 300
  },
});