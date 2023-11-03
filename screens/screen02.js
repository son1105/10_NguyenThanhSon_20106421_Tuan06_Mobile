import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import React from "react";
export default function Screen02({ navigation, route }) {
  var name = route.params;
  var [obj, setObj] = React.useState({});
  var [arr, setArr] = React.useState([]);
  var [todo, setTodo] = React.useState("");
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", width: "100%", marginRight: 20 }}>
          <Image
            source={require("../assets/user.jpg")}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Hi {name}</Text>
            <Text style={{ fontSize: 14, fontWeight: 700 }}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      ),
    });
    console.log("useEffect")
    fetch("https://654370a801b5e279de205e32.mockapi.io/api/v1/todo")
      .then((response) => response.json())
      .then((data) => {
        var temp = data.filter((item) => {
          return item.name == name;
        });
        setObj(temp[0]);
        setArr(temp[0].todo);
      });
  }, []);
  console.log(obj)
  console.log(arr)
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: "90%",
            borderColor: "#9095A0",
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: "#ffffff",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              arr = obj.todo.filter((item) => {
                  return item.includes(todo);
                })
              setArr(arr);
            }}
          >
            <Fontisto
              name="search"
              size={30}
              color="black"
              style={{ marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              fontSize: 14,
              backgroundColor: "#ffffff",
              height: 44,
              padding: 10,
              width: "87%",
            }}
            placeholder="Search"
            value={todo}
            onChangeText={setTodo}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          style={{ width: "90%" }}
          data={arr}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: "center",
                marginVertical: 10,
                height: 48,
                borderRadius: 24,
                backgroundColor: "lightgray",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => {
                obj.todo = obj.todo.filter((item1) => {
                  return item1 != item;
                });
                setObj(obj);
                arr = obj.todo.filter((item) => {
                      return item.includes(todo);
                    })
                setArr(arr);
                fetch ('https://654370a801b5e279de205e32.mockapi.io/api/v1/todo/'+obj.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj),
                })}}
              >
                <MaterialCommunityIcons
                  style={{ marginHorizontal: 30 }}
                  name="checkbox-marked-outline"
                  size={24}
                  color="green"
                />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>{item}</Text>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginHorizontal: 30 }}
                  name="edit"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 69,
            height: 69,
            borderRadius: 35,
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.navigate("Screen03", obj);
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 700, color: "#ffffff" }}>
            +
          </Text>
        </TouchableOpacity>
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
