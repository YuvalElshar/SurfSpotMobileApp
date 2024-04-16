import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Image, Text, View } from "react-native";

function SpotItem({ spot, onSelect }) {
  <Pressable>
    <Image sorce={{ uri: SpotItem.image }} />
    <view>
      <text>{spot.title}</text>
      <text>{spot.location}</text>
    </view>
  </Pressable>;
}

export default SpotItem;
