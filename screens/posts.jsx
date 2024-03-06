import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet, StatusBar, SectionList, TouchableOpacity, View } from "react-native";

Posts = () => {

    const navigation = useNavigation();

    const posts = [
        {
            image: require("../assets/paramoregif.jpg"),
            description: "Amo a Paramore", liked: true, likes: 0,
            username: "SebasS", userimage: require("../assets/profile.png")
        },
        {
            image: require("../assets/paramore.png"),
            description: "Check out our new Album 'This is Why'!", likes: 1000,
            liked: true, username: "Paramore", userimage: require("../assets/paramorelogo.jpg")
        },
        {
            image: require("../assets/hayleywilliams.jpg"),
            description: "I love go up from scenarios", likes: 1000,
            liked: false, username: "HayleyWilliams", userimage: require("../assets/hayleyprofile.jpg")
        },
    ];

    const [postsH, setPost] = useState(posts);

    const likePost = (item) => {
        console.log(item.likes);
        item.likes++;
        console.log(item.likes);
        setPost(posts)
    }

    const goToUser = (item) => {
        navigation.navigate('Profile', { item });
    }

    return (
        <View style={styles.container}>
            <View>
                <SectionList
                    sections={
                        [
                            { title: "Posts", data: postsH }
                        ]
                    }
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={styles.cardPost}>
                            <TouchableOpacity onPress={() => goToUser(item)}>
                                <View style={styles.userInfo}>
                                    <Image style={styles.profilePhoto}
                                        source={item.userimage} />
                                    <Text style={styles.username}>
                                        {item.username}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View>
                                <Image style={styles.postImage}
                                    source={item.image} />
                            </View>
                            <View style={styles.icons}>
                                <TouchableOpacity onPress={() => likePost(item)}>
                                    <MaterialIcons
                                        name="star-outline"
                                        size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignSelf: 'center'
                                }}>
                                    {item.likes} Personas le gusta
                                </Text>
                            </View>
                            <View style={styles.description}>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    fontWeight: 'bold'
                                }}>
                                    {item.username}
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                }}> {item.description}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
            <StatusBar barStyle={"light-content"}
                backgroundColor="#089779" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3,
    },
    cardPost: {
        flex: 1,
        backgroundColor: "#ecdbce",
        width: 400,
        height: 'auto',
        marginTop: 10,
    },
    username: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 3
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    postImage: {
        width: 400,
        height: 200
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 3
    }
})

export default Posts;