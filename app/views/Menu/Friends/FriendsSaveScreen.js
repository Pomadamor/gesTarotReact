import React, {Component} from "react";
import { View, Text, Button } from "native-base";
import { Alert } from 'react-native';

class FriendsSave extends Component {
  render(){
      ("props of before:", this.props);
      //const friendsSave =  this.props.turns
      const friendsSave = this.props.friendsSave[0];
    //   ("friendsSave: ", friendsSave.preneur);
    
    console.log("FRIENDS", friendsSave)
      return (
            <View style={{flexDirection: 'row'}}>
                <Button bordered light 
                backgroundColor= 'rgba(52, 52, 52, 0.6)'
                style={{flex:1, height:60, margin:1}} >
                    <View style={{width:"100%", alignItems:"center"}}>
                    <Text style={{
                            textAlign: 'center', 
                            color:"white"}}>avatar</Text>
                    </View>
                </Button>
                <Button bordered light 
                    backgroundColor='rgba(52, 52, 52, 0.6)'
                    style={{flex:1, height:60, margin:1}} >
                <View style={{width:"100%", alignItems:"center"}}>
                    <Text style={{
                            textAlign: 'center', 
                            color:"white"}}>pseudo</Text>
                    </View>
                </Button>
            </View>
      )
    }
  }

export default (FriendsSave);