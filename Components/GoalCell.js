
import { StyleSheet, View, Text } from "react-native";

const GoalCell = (props) => {

    return <View style={styles.container}>
        <Text style={styles.text}>{props.data}</Text>
    </View>
}

export default GoalCell;

const styles = StyleSheet.create({

    container: {
        width: "100%",
        margin: 4,
        padding: 8,
        backgroundColor: "#7f2fa1",
    },
    text:{
        color: "white",
        fontSize: 18
    }
})