import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';
import InitGame from "./InitGame";
import LiveGame from "./LiveGame";

class GameScreen extends Component {

  // handleBackPress = () => {
  //   this.props.navigation.navigate("Choose"); // works best when the goBack is async
  //   return true;
  // }

  buttonTurn(){

    if(this.props.score == 0 && this.props.type != ""){
        this.props.navigation.navigate("GrillScore")
    }else{
      const actionId = { type: "MUTATION_ID", value: this.props.id + 1}
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `tour n°${this.props.id + 1}`}
      this.props.dispatch(actionBtnTurn)

  
      this.props.navigation.navigate("GrillChoose")
    }
  }

  render(){
    console.log(this.props.score)

    return (
      <View style={{
        flexDirection: 'column',
      }}>
        <InitGame/>
        <LiveGame/> 
         
        <View style={{flex:0.1, margin:20}}>

          <Button block info 
            onPress={() => this.buttonTurn()}
          >
            <Text 
              style={{
                textAlign: 'center', 
                color:"white"
              }}
            >
            { this.props.buttonTurnView }
            </Text>
          </Button>
        </View>
       </View>
      )
    }
  }

  
const mappropsToProps = (props) => {
  return props
}

export default connect(mappropsToProps)(GameScreen);