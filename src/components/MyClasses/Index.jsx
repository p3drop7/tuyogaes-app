import React, { useState } from "react";
import { FlatList, Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import FONTS from "../../constants/Fonts";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";
import { deleteClass , selectClass, addToFB } from '../../store/actions/myClasses.actions';

const MyClasses = () => {

  // Item select to pass it to modal pop-up
  const [itemSelected, setItemSelected] = useState({});

  // State for pop-up modal
  const [modalVisible, setModalVisible] = useState(false);

  // State in redux to save a list of classes selected from MonthClasses and DayClasses screens
  const myClasses = useSelector( state => state.myClasses.myClasses )

  // Selected class to show on pop-up modal
  const selectedClass = useSelector( state => state.myClasses.selectedClass )
  const dispatch = useDispatch()

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


  return (
    <>
      <Text style={styles.title}>Mis próximas clases</Text>

      <Button title="agregar" onPress={() =>{

        dispatch(addToFB(myClasses))
      }
      } />

      <View style={styles.container}>

        { myClasses.length === 0 ? (
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