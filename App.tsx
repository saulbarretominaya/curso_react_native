import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'

export default function App() {           // <-- default export
  return (
    <SafeAreaView>
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
}

