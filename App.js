import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import GoalInput from "./Components/GoalInput";
import GoalCell from "./Components/GoalCell";

export default function App() {

  const [goalsData, setGoalsData] = useState([
    
  ]);

  function addGoalHandler(input){
    setGoalsData(p => [input, ...p])
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoalHandler} />

      <View style={styles.list}>
        {goalsData.length === 0 
        ? <Text>No Goals Found</Text> 
        : <FlatList data={goalsData} 
          renderItem={(item) => {
            return <GoalCell data={item.item.text} />
          }}
          keyExtractor={item => {item.id}}
        />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingRight: 15,
    paddingLeft: 15,
    height: "100%",
    backgroundColor: "#c6a3d5"
  },
  list:{
    marginTop: 10,
    flex: 1
  }
});
