import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const icons = {
  Haze: {
    iconName: "fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Clouds: { iconName: "cloud", gradient: ["#2193b0", "#6dd5ed"] },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
  Drizzle: { iconName: "weather-fog", gradient: ["#1f4037", "#99f2c8"] },
  Rain: { iconName: "weather-rain", gradient: ["#373B44", "#4286f4"] },
  Snow: { iconName: "snowflake", gradient: ["#E0EAFC", "#CFDEF3"] },
  Atmosphere: { iconName: "weather-fog", gradient: ["#1f4037", "#99f2c8"] },
  Clear: {
    iconName: "white-balance-sunny",
    gradient: ["#2980B9", "##6DD5FA", "#FFFFFF"],
  },
  Mist: { iconName: "weather-fog", gradient: ["#bdc3c7", "#2c3e50"] },
  Smoke: { iconName: "weather-fog", gradient: ["#bdc3c7", "#2c3e50"] },
  Dust: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"] },
  Fog: { iconName: "weather-fog", gradient: ["#bdc3c7", "#2c3e50"] },
  Sand: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"] },
  Ash: { iconName: "weather-fog", gradient: ["#bdc3c7", "#2c3e50"] },
  Squall: { iconName: "weather-tornado", gradient: ["#0F2027", "#203A43"] },
  Tornadog: { iconName: "weather-tornado", gradient: ["#0F2027", "#203A43"] },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={icons[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={icons[condition].iconName}
          size={95}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.cond}>{condition}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 35,
    color: "white",
  },
  cond: {
    fontSize: 35,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
