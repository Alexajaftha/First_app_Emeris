import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { ReactNode, useState} from 'react' ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleProp, ViewStyle} from 'react-native';
import { Animated } from 'react-native';


type RootStackParamList = {
  Home: undefined;
  View: {
  NameSend: string;
  SurnameSend: string;
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type MainscreenProps = NativeStackScreenProps<
RootStackParamList, 
'Home'
>;








export default function App() {

 const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


function MainScreen() { 

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');

  console.log("App starting up!");

  return (
    <View style={styles.welcomeText}>


      <View style={styles.mainPicture}>
        <Image style={styles.ImageSize} 
        source={require('./Images/Arrow.webp')} />
      </View>


      <Text style={styles.welcomeText}>Welcome!</Text>


       <View style={styles.InputFlex}>
       <Text style= {styles.label}>Enter your name!</Text>
       <TextInput placeholder='Jane'
       autoCapitalize="words"
       onChangeText={newText => setName(newText.replace(/[^a-zA-Z ]/g, ""))}/>

       
       <Text style= {styles.label}>Enter your surname!</Text>
       <TextInput placeholder='Doe'
       autoCapitalize="words"
       onChangeText={newText => setSurname(newText.replace(/[^a-zA-Z ]/g, ""))}/>
       </View>
      



       <Button title = 'Add User' 
       onPress={() => {
         console.log("Name: " + Name + ","+ " Surname: " + Surname)
         }}/>

       <StatusBar style="auto" />
      
    
    </View>

  );
}



const styles = StyleSheet.create({
 welcomeText: {
  paddingTop: 30,
  color: 'lightblue', 
  fontWeight: 'bold',
  fontSize: 28, 
  textAlign: 'center'

 },

 line: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  width: '100%',
  marginVertical: 10,

 },

 label: {
  fontWeight: 'bold',
 },

  mainPicture: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  ImageSize: {
    width: 350,
    height: 350,
  },

  InputFlex: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
});
