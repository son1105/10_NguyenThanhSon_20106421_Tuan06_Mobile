import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
export default function Screen03({ navigation, route }) {
  var obj = route.params;
  var [job, setJob] = React.useState("");
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ flexDirection: "row", width: "100%", marginLeft: 20 }}>
          <Image
            source={require("../assets/user.jpg")}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Hi {obj.name}</Text>
            <Text style={{ fontSize: 14, fontWeight: 700 }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen02", obj.name);
          }}
        >
          <AntDesign
            style={{ marginRight: 30 }}
            name="arrowleft"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginVertical: 10,
            height: "10%",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          ADD YOUR JOB
        </Text>
        <View
          style={{
            width: "90%",
            borderColor: "#9095A0",
            borderWidth: 1,
            borderRadius: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons
            name="list-alt"
            size={30}
            color="green"
            style={{ marginHorizontal: 10 }}
          />
          <TextInput
            style={{
              fontSize: 14,
              backgroundColor: "#ffffff",
              height: "99%",
              padding: 10,
              width: "87%",
            }}
            placeholder="input your job"
            value={job}
            onChangeText={setJob}
          />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 190,
            height: 44,
            backgroundColor: "#00BDD6",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={() => {
            obj.todo.push(job);
            fetch(
              "https://654370a801b5e279de205e32.mockapi.io/api/v1/todo/" +
                obj.id,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
              }
            ).then((response) => console.log(response));
            navigation.navigate("Screen02", obj.name);
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16, marginRight: 10 }}>
            FINSH
          </Text>
          <Feather name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 190, height: 190 }}
          source={require("../assets/addJob.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
