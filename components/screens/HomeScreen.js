import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Headline from "../subcomponents/Headline";
import Card from "../subcomponents/Card";
import QuickRoute from "../subcomponents/QuickRoute";
import doctors from "../consts/Doctor";
import pageImages from "../consts/PageImages";
import MyCart from "../Ecommerce/MyCart";


export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(doctors);
  const [masterDataSource, setMasterDataSource] = useState(doctors);
  // const[Datasource,setDatasource]=useState(getProducts);
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.firstname} ${item.lastname}`
          ? `${item.firstname} ${item.lastname}`.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
    const searchFilterFunction2 =(text2)=>{
    const testData = Datasource.filter(function(items){
      const itemData2= `${items.name}`.toUpperCase()?`${items.name}`.toUpperCase():"".toUpperCase();
      const textData2 =text2.toUpperCase();
      return itemData2.indexOf(textData2)> -1;
    });setDatasource(testData);}
    
  };

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { width } = Dimensions.get("screen");
  const cardWidth = width / 1.9;

  return (
    <View style={styles.container}>
      <Headline />

      <ScrollView
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.textHeader}> Nursing at Home </Text>
        </View>

        <SearchBar
          round
          searchIcon={{ size: 26 }}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.searchInputContainer}
          placeholder=" search"
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction("")}
          value={search}
        />
       <Text style={{  fontSize: 26,
    fontWeight: "bold",left:30,top:5}}>Services</Text>
         {/* <CategoryList /> */}

        <View style={styles.list}>
          <FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            vertical
            showsHorizontalScrollIndicator={true}
            data={filteredDataSource}
            contentContainerStyle={{padding:20, paddingVertical:50 }}
            renderItem={({ item, index }) => (
              <View style={styles.cards}>
              <TouchableOpacity
                // disabled={activeCardIndex != index}
                activeOpacity={1}
                onPress={() => navigation.navigate("Booking", item)}
              >
                <Card doctor={item} index={index} />
              </TouchableOpacity>
              </View>
            )}
          />
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
  searchContainer: {
    fontSize: 16,
    paddingLeft: 15,
    backgroundColor: "white",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 10,
  },
  searchInputContainer: {
    backgroundColor: "#F0F8FF",
    marginLeft: 10,
    marginRight: 10,
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
  // list:{
  //   flex:1,
  //   alignItems:"center",
  // },
  cards:{
    flex:1,
    paddingVertical:20,
  }
});
