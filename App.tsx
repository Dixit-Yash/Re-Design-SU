import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import WelcomeScreen from './src/components/WelcomeScreen'
 //import WelcomeScreen2 from './src/components/WelcomeScreen2'
//  import WelcomeScreen3 from './src/components/WelcomeScreen3'
// import WelcomeScreen4 from './src/components/WelcomeScreen4'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      
       <WelcomeScreen />
       {/* <WelcomeScreen2/>
        <WelcomeScreen3/>
        <WelcomeScreen4/> */}
            </ScrollView>
    </SafeAreaView>
  )
}

export default App