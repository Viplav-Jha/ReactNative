import React from 'react'
import {View,Text,Button} from 'react-native';


const Home = (props)=>{
    return(
    <View>   
           <Text style={{fontSize:50}}>Hello!This is Home component {props.data}</Text>
           <Button title="Press " />
    </View>
    )
}
    
export default Home;
