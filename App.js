import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Notification from "./components/Notification";

const data = [
  {
    id: "1",
    src: require("./assets/checked.png"),
    title: "Bước 1 Xác định nhu cầu khách hàng",
    content: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    date: "20/08/2020, 06:00",
  },
  {
    id: "2",
    src: require("./assets/group.png"),
    title: "Bạn có khách hàng mới!",
    content:
      "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    date: "20/08/2020, 06:00",
  },
  {
    id: "3",
    src: require("./assets/group.png"),
    title: "Khách hàng được chia sẻ bị trùng",
    content:
      "Rất tiếc khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    date: "20/08/2020, 06:00",
  },
  {
    id: "4",
    src: require("./assets/group.png"),
    title: "Khách hàng được thêm bị trùng",
    content:
      "Rất tiếc khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng thêm khách hàng",
    date: "20/08/2020, 06:00",
  },
  {
    id: "5",
    src: require("./assets/checked.png"),
    title: "Công việc sắp đến hạn trong hôm nay",
    content: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    date: "20/08/2020, 06:00",
  },
  {
    id: "6",
    src: require("./assets/checked.png"),
    title: "Công việc đã quá hạn",
    content:
      "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    date: "20/08/2020, 06:00",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Thông báo</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Notification
            src={item.src}
            title={item.title}
            content={item.content}
            date={item.date}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    fontWeight: 700,
    fontSize: 20,
  },
});
