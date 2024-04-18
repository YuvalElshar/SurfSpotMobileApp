import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

function SpotDetailes() {
  const route = useRoute();
  const { data } = route.params;
  console.log(data);
  return (
    <View>
      <Text>Spot Details:</Text>
      <Text>{data.info}</Text>
      <Text>{data.location}</Text>
      <Text>{data.title}</Text>
    </View>
  );
}

export default SpotDetailes;

const styles = StyleSheet.create({});
