import { Button, Text, View, Image } from 'react-native';
import {useState} from 'react';
import { RadioButton } from 'react-native-paper';
import styles from '../components/Styles';



function createArrayLog(logArray: string[]) {
    let outputString = "";
    for(let block in logArray)
{
outputString += logArray[block] + "";
}
return outputString;
}



function ViewDetails({ navigation, route }){

  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;
  const [selectedValue, setSelectedValue] = useState('0');
  const [iSelected, setIntValue] = useState(0);
  const [blockArray] = useState(["", "", "", ""]);

  blockArray[0]=('');
  blockArray[1]=require('../img/react.png');
  blockArray[2]=require('../img/kotlin.png');
  blockArray[3]=require('../img/html.jpg');

  let output = createArrayLog(blockArray);
  console.log(output);


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
 export default ViewDetails;
