import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import CategoryList from "../subcomponents/CategoryList";
import Card from "../subcomponents/Card";
import doctors from "../consts/Doctor";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>Dashboard</Text>
          <Text style={{ fontSize: 16 }}>Friday, April 15</Text>
        </View>
        <Icon name="notifications" size={26} color={"grey"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Find your doctor here</Text>
        </View>
        <View>
          <View style={styles.serachInputContainer}>
            <TextInput
              placeholder="Type your doctor's name"
              style={{ fontSize: 16, paddingLeft: 15 }}
            />
            <Icon name="search" size={30} style={{ marginRight: 10 }} />
          </View>
          <CategoryList />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={doctors}
            contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
            renderItem={({ item, index }) => (
              <Card doctor={item} index={index} />
            )}
          />
        </View>
        <View style={styles.headerQuickAcess}>
          <Text style={styles.textHeaderQuickAccess}>Quick Access</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerQuickAcess: {
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeaderQuickAccess: {
    fontSize: 26,
    fontWeight: "bold",
  },

  serachInputContainer: {
    height: 50,
    backgroundColor: "white",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#b4b4b4",
    justifyContent: "space-between",
  },
});
