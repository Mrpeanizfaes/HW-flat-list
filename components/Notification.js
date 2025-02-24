import { StyleSheet, Text, View, Image } from "react-native";

export default function Notification(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.src} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.content}>{props.content}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d2dcfa",
    padding: 4,
    alignItems: "center",
    margin: 0.5,
  },
  image: {
    width: 25,
    height: 25,
    margin: 10,
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
    padding: 5,
    paddingBottom: 0,
  },
  content: {
    fontWeight: 400,
    fontSize: 16,
    padding: 5,
  },
  date: {
    fontWeight: 300,
    fontSize: 14,
    padding: 5,
  },
});
