import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { MyClassesContext } from "../../context/MyClassesContext";
import ClassItem from "./ClassItem";
import DeleteModal from "./DeleteModal";
import FONTS from "../../constants/Fonts";

const MyClasses = ({ navigation }) => {
  const { myClassList, deleteClass } = useContext(MyClassesContext);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onHandlerModal = (key) => {
    let currentItem = myClassList.filter((item) => item.key === key)[0];
    setItemSelected(currentItem);
    setModalVisible(!modalVisible);
  };

  const deleteItem = () => {
    deleteClass(itemSelected);
    setModalVisible(!modalVisible);
  };

  return (
    <View>
      <Text style={styles.title}>Mis próximas clases</Text>

      <View style={styles.container}>
        {myClassList.length === 0 ? (
          <Text style={styles.emptyList}>No has agregado clases</Text>
        ) : (
          <View style={styles.listContainer}>
            <FlatList
              contentContainerStyle={styles.contentContainer}
              data={myClassList}
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
    </View>
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