import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Images/img4.jpg')} // Replace with your image URL
          style={styles.image}
        />
      </View>
      <Text style={styles.welcomeText}>Track Your Progess</Text>
      <Text style={styles.description}>
        Use our analytics tools to monitor your learning journey,get detailed feedbacks,insights,celebrate your achievements and identify areas for improvement.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : '20%',
    marginBottom : '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 343,
    height: 343,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  welcomeText: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 10,
    color:'#043142'
    
  },
  
  description: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    fontFamily: 'Poppins-Medium',
    color:'#999999',
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0', // Change to your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 40
  },
  buttonText: {
    fontSize: 24,
    color: '#000', // Change to your desired text color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;