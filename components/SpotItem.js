import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Image, Text, View } from "react-native";

function SpotItem({ spot, onSelect }) {
  <Pressable>
    <Image sorce={{ uri: SpotItem.image }} />
    <View>
      <Text>{spot.title}</Text>
      <Text>{spot.location}</Text>
    </View>
  </Pressable>;
}

export default SpotItem;
