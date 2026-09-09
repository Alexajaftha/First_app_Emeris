import { Button, Text, TextInput, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from '../components/Styles';


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
    );
  };
  export default ListSkills;