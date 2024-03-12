import {View, Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export const Main = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{paddingTop: insets.top}}>
      <Text>Main</Text>
    </View>
  );
};
