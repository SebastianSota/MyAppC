import { useRoute } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";
import { View } from "react-native";

Profile2 = () => {
    const route = useRoute();
    const { user } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: user.image }} style={{width: 100, height: 100}} />
            <Text>{user.username}</Text>
            <Text>{user.edad}</Text>
        </View>
    )
}
export default Profile2;