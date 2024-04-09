// components/Task.js

import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../features/tasksSlice";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleToggle}>
      <View style={styles.itemLeft}>
        <View
          style={[styles.square, task.isCompleted && styles.completedSquare]}
        />
        <Text
          style={[
            styles.itemText,
            task.isCompleted && styles.completedItemText,
          ]}
        >
          {task.text}
        </Text>
      </View>
      <TouchableOpacity onPress={handleRemove}>
        <Icon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "blue",
    opacity: 0.4,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  completedSquare: {
    opacity: 0.2,
  },
  completedItemText: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
  },
});

export default Task;
