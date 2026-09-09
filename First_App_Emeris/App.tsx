import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, Image, SafeAreaView, ScrollView, Animated, ViewStyle, StyleProp, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useState, useRef, useEffect, ReactNode } from 'react' ;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';




type RootStackParamList = {
  Home: undefined;
  View: {
  NameSend: string;
  SurnameSend: string;
  };
  ListSkills: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

type MainscreenProps = NativeStackScreenProps<
RootStackParamList, 
'Home'
>;

type ViewDetailsProps = NativeStackScreenProps<
RootStackParamList, 
'View'
>;

type ListSkillsProps = NativeStackScreenProps<
RootStackParamList, 
'ListSkills'
>;


export default function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="View" component={ViewDetails} />
      <Stack.Screen name="ListSkills" component={ListSkills} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


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



function ViewDetails({ navigation, route }: ViewDetailsProps){

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  const [selectedValue, setSelectedValue] = useState('0');
  const [ImageBlock, setImage] = useState<ImageSourcePropType | undefined>(undefined);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Welcome {NameGet} {SurnameGet} !</Text>
        <Text>Please choose a language:</Text>
      </View>


      <View style={styles.radioContainer}>
        <View style={styles.radioGroup}>
        <View style={styles.radioButton}>
          <RadioButton.Android
            value="1"
            status={selectedValue === '1' ?
              'checked' : 'unchecked'}


            onPress={() => setSelectedValue('1')}
            color="#007Bff" 
            />
          <Text style={styles.RadioLabel}>React Native</Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton.Android
            value="2"
            status={selectedValue === '2' ?
              'checked' : 'unchecked'}
            onPress={() => setSelectedValue('2')}
            color="#007Bff" 
            />
            
          <Text style={styles.RadioLabel}>Kotlin</Text>
        </View>


        <View style={styles.radioButton}>
          <RadioButton.Android
            value="3"
            status={selectedValue === '3' ?
              'checked' : 'unchecked'}

            onPress={() => setSelectedValue('3')}
            color="#007Bff" 
            />
          <Text style={styles.RadioLabel}>HTML and CSS</Text>
        </View>
      </View>
    </View>
    <View style = {{ flex: 1 }}>
        <Text style={{
          fontWeight: "bold", flex: 0, paddingTop: 30, justifyContent: 
          'center', textAlign: 'center', alignItems: 'center'}}>
          Generate Chosen Language Image :
        </Text>

        <Button title="Generate"
          onPress={() => {

            switch (selectedValue) {
              case "1":
                setImage(require('./Images/react native image.png'));
                break;
              case "2":
                setImage(require('./Images/Kotlin image.png'));
                break;
              case "3":
                setImage(require('./Images/HTML image.png'));
                break;
              default:
                setImage(undefined);
            }
          }} 
          />
        <View style={styles.container}>
          <Image source={ImageBlock} style={styles.ViewImage}></Image>
        </View>   
      </View>
   </View>
  );
 };





function ListSkills({ navigation, route }: ListSkillsProps) {
  const [Skills, setSkills] = useState<string[]>([]);
  const [txtSkill, setSkill] = useState('');


  const removeSkillHandler = (index: number) => {
    setSkills((currentSkills) => currentSkills.filter((skill, i) => i !== index));

  }


  const renderSkills = () => {
    const arrOutput = [];

    for (let i = 0; i < Skills.length; i++) {
      arrOutput.push(

        <View key={i} style={styles.inputContainer }>
        <Text style={styles.skillText}>
          {Skills[i]}
        </Text>

        <TouchableOpacity onPress= {() => removeSkillHandler (i)} style={styles.deleteBtn}>
          <Text style={styles.deleteBtnTxt}>Remove</Text>

        </TouchableOpacity>


        </View>
      )
    }
    return arrOutput;
  }

    return (
      <View style={styles.appContainer}>
      <View>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainImg}>
            <Image style={styles.bannerImg}
              source={require('./Images/banner.jpg')} />
          </View>

          <Text style={styles.welcomeTxt}>List Your Skills!</Text>

          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
              placeholder= 'Enter your skills'
              onChangeText={newText => setSkill(newText)} 
              />

              <Button title='Add Skill'
              onPress={() => {
                Skills.push(txtSkill);
                setSkill("");
              }} 
              />
          </View>
          <View style={styles.skillContainer}>
            {renderSkills()}
              </View>
           </ScrollView>
         </SafeAreaView>
       </View>
      </View>
    )
  }
          


    



            
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



const styles = StyleSheet.create({
 welcomeTxt: {
  paddingTop: 50,
  color: 'blue', 
  fontWeight: 'bold',
  fontSize: 30, 
  textAlign: 'center'

 },

 headingTxt: {
  fontWeight: 'bold',
 },

 inputBoxTxt: {
  borderBottomWidth: 1
 },

  mainImg: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height:250

  },

  inputFlex: {
    marginTop: 20,
    justifyContent: 'space-evenly',
  },

  redTxt: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },

  blank: {
    fontSize: 0,
  },

  radioContainer: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  RadioLabel: {
    marginLeft: 5,
    fontSize: 15,
    color: 'black',
  },

  radioGroup:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 15,
    elevation: 5,
    shadowColor: '#404040',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    
  },

  ViewImage: {
    width: 350,
    height: 350,
    alignContent: 'center',
  },

  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerImg: {
    width: 350,
    alignItems: 'center',
  },


  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#fca4d1'

  },

  textInput: {
    borderWidth: 1,
    borderColor: '#fca4d1',
    width: '70%',
    margin: 7,
    padding: 5
  },

  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 15
  },

  skillContainer: {
    flex: 5
  },

  skillText: {
    fontSize: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#8ad2ff'

  },


 line: {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  width: '100%',
  marginVertical: 10,

 },

deleteBtn:{
  backgroundColor: '#d14f4f' ,
  padding: 5,
  borderRadius: 5
},

deleteBtnTxt: {
color: 'white',
fontWeight: 'bold'
}

});
