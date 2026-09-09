import { Button, Text, TextInput, View, Image, SafeAreaView, ScrollView } from 'react-native';
import {useState} from 'react'
import styles from '../components/Styles';
import FadeInView from './FadeInView';



function isEmpty(value: any) {
  return(
    (value === null) ||
    (value.hasOwnProperty('length') && value.length === 0) ||
    (value.constructor === Object && Object.keys(value).length === 0)
  )
};

  interface FadeViewprops {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
  }


  const FadeInView = ({children, style}: FadeViewprops)=> {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false
        }
      ).start();
    }, [fadeAnim])
    
    return (
      <Animated.View style = {{
        ...(style as object),
        opacity: fadeAnim,
      }}>
        {children}
      </Animated.View>
    );
  };


function MainScreen({ navigation }: MainscreenProps) { 

  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [Error, setError] = useState(false);
  

  console.log("App starting up!");

  return (
    <View>
      <SafeAreaView>
      <ScrollView>
        <Image style={styles.mainImg}
        source={require('./Images/react native image.png')} />

        <Text style={styles.welcomeTxt}>Welcome!</Text>

        <FadeInView>
          <Text style={Error? styles.redTxt : styles.blank}>{Error? "Please enter your info" : ""}</Text>
          <View style={styles.inputFlex}>
            <Text style={styles.headingTxt}>Enter your name:</Text>
            <TextInput style={styles.inputBoxTxt}
            placeholder="Jane"
            onChangeText={newText => setName(newText)}/>

            <Text style={styles.headingTxt}>Enter your surname:</Text>
            <TextInput style={styles.inputBoxTxt}
            placeholder="Doe"
            onChangeText={newText => setSurname(newText)}/>
          </View>
        </FadeInView>

      



       <Button title = 'Add User' 
       onPress={() => {

        if((isEmpty(Name) ==false) && (isEmpty(Surname) == false)){
          navigation.navigate('View', { 
            NameSend: Name,
            SurnameSend: Surname });
            setError(false);
        }
        else{
          setError(true);
        }
         }}/>

       <StatusBar style="auto" />
        </ScrollView>
        </SafeAreaView>
    </View>
  );
};
export default MainScreen;