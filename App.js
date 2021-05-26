import React,{Component} from 'react';
// import { render } from 'react-dom';
import { 
  View,
  Text,Button
} from 'react-native';
import Login from './components/Login'
import Home from './components/Home'
import Style from './components/Style';
import TextInputs from './components/TextInputs'
import Forms from './components/Forms';
import Flexs from './components/Flexs'

const App =()=>{

  const Data="Some data"

  const login =()=>{
   alert("Hi , this is function component")
  }
  return(
    <View>
      <Text style={{fontsize:70}}>Function component </Text>
      <Button title="Login" onPress={login}></Button> */}
       <Home data={Data} /> 
       <Login /> 
       <Style></Style> 
       <TextInputs />
      <Forms></Forms>
      <Flexs/>
    </View>
  )
}

export default App;

// class App extends Component {


// render(){
//   return (
//    <View>  
//        <Text style={{fontsize:90}}> Class components </Text>
       
//        <Button title="Press ON" onPress={()=>{alert("class components")}}></Button>
//    </View>
//   )
// }
// }

// export default App;
