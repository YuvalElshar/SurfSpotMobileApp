import { FlatList, View, StyleSheet, Text } from "react-native";
import SpotItem from "./SpotItem";
import { Colors } from "../constants/colors";

function SpotList({ spots }) {
  if (!spots || spots.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No Spots</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={spots}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <SpotItem spot={item} />}
    />
  );
}

export default SpotList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary800,
  },
});
