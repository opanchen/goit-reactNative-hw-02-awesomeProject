import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { PostsScreen } from './Screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
  })

  return (
    <>
      {/* <RegistrationScreen/> */}

      <LoginScreen/>

      {/* <PostsScreen/> */}
    </>




    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
