import React from 'react';
import {View, TextInput,Button,StyleSheet} from 'react-native'

class Forms extends React.Component {
    constructor() {
        super();
    
        this.state = {
             name:"",
             password: "",
             address:"",
        }
    }
    
    submit(){
        console.log(this.state)
        alert("function called")
    }
    render() {
        return (
         <View>
            {/* <Text style={{fontSize:50}}>{this.state.name} </Text> */}

         <TextInput placeholder="Enter Name"

          style={styles.textbox}
          onChangeText={(text)=>{this.setState({name:text})}} 
          ></TextInput>

          
         <TextInput placeholder="Enter Password"
         secureTextEntry={true}
          style={styles.textbox}
          onChangeText={(text)=>{this.setState({password:text})}} 
          ></TextInput>
         
         
         <TextInput placeholder="Enter Address"
          style={styles.textbox}
          onChangeText={(text)=>{this.setState({address:text})}} 
          ></TextInput>
         
         <Button onPress={()=>{this.submit()} }title="Submit" />
         
         </View>
        );
    }
}

const styles = StyleSheet.create({
 textbox:{
     borderColor:'skyblue',
     borderWidth:2,
     padding:10,
     marginHorizontal:20,
     marginVertical:20,

 },
})

export default Forms;
