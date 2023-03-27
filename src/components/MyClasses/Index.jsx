import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import FONTS from "../../constants/Fonts";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";

const MyClasses = () => {

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const myClasses = useSelector( state => state.myClasses.myClasses )

  const onHandlerModal = (key) => {
    let currentItem = myClasses.filter((item) => item.key === key)[0];
    setItemSelected(currentItem);
    setModalVisible(!modalVisible);
  };

  const deleteItem = () => {
    deleteClass(itemSelected);
    setModalVisible(!modalVisible);
  };



  React.useEffect(() => {
    console.log('myClasses', myClasses)
  })


  return (
    <ScrollView>
      <Text style={styles.title}>Mis próximas clases</Text>

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
    </ScrollView>
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
  },

  contentContainer: {
    alignItems: "center",
  },
});