import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = (props) => {

    const [input, setInput] = useState("");

    function inputChangeHandler(value){
        setInput(value);
    }

    function addGoalHandler(){
        if(input === ""){
            return;
        }
        props.addGoal({text: input, id: Math.random()*1000});
        setInput("");
    }

    return <View style={styles.container}>
        <TextInput placeholder="Add Goals" style{...styles.input} onChangeText={inputChangeHandler} value={input} />
        <Button title="Add Goal" onPress={addGoalHandler} />
    </View>

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    input: {
        flex: 5,
        padding: 8,
        borderWidth: 0,
        borderStyle: "solid",
        borderRightWidth: 0,
        backgroundColor: "#e2d1ea"
    }
})

export default GoalInput;