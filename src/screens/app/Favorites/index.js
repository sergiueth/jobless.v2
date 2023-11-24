import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../data/products";
import FavoritesItem from "../../../components/FavoriteItem";
import Header from "../../../components/Header";

const Favorites = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate("ProductDetails", { product: item });
    };
    return <FavoritesItem onPress={onProductPress} {...item} />;
  };

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <Header title="Favorites" showBack onBackPress={goBack} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => String(item?.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default React.memo(Favorites);
