import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Images/img1.jpg')} // Replace with your image URL
            style={styles.image}
          />
        </View>
        <Text style={styles.welcomeText}>Welcome to ScaleUp!</Text>
        <Text style={styles.description}>
          Your journey to focused, distraction-free learning starts here. Discover a platform designed to enhance your knowledge and keep you engaged.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    width:"100%",
    height:"100%"
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '40%',
    width:"100%",
    height:"100%"
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 343,
    height: 343,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#043142',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Poppins-Medium',
    color: '#999999',
    marginHorizontal: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default WelcomeScreen;