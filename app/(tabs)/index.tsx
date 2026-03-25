import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/background-image.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>O DIA</Text>
        <Text style={styles.title}>SANTIFICADO</Text>
        <Text style={styles.subtitle}>Um aplicativo de Orações Católicas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CC4429",
  },
  imageWrapper: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleWrapper: {
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: "flex-start",
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 2,
    lineHeight: 38,
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 8,
    fontStyle: "italic",
    opacity: 0.9,
  },
});
