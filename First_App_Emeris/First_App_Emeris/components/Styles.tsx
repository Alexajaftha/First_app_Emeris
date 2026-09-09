import {StyleSheet} from 'react-native';


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

}
);
export default styles;