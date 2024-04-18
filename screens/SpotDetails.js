import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

function SpotDetails() {
  const route = useRoute();
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Spot Details:</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Info:</Text>
        <Text style={styles.text}>{data.info}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Dangers:</Text>
        <Text style={styles.text}>{data.dangers}</Text>
      </View>
    </View>
  );
}

export default SpotDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
});
