import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';

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
    console.log(this.props);

    if ( this.props.joueurs.length == 0 ) {
      const nbJoueurChoose = this.props.nbJoueur;
  
      for(let i = 1; i <= nbJoueurChoose; i++){
        this.props.joueurs.push(`Joueur ${i}`)
      }
    }

    if(this.props.joueurs.length>3){
      joueurFour = <Button bordered light 
                      onPress={() => this.props.navigation.navigate("Stat")}
                      style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} 
                  >
                      <View style={{width:"100%", alignItems:"center"}}>
                          <Text style={{
                              textAlign: 'center', 
                              color:"white"}}
                          >
                              { this.props.joueurs[3] }
                          </Text>
                      </View>
                  </Button>
  } else {
      joueurFour = <View></View>
  }
  if(this.props.joueurs.length>4){
      joueurFive =    <Button bordered light 
                          onPress={() => this.props.navigation.navigate("Stat")}
                          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} 
                      >
                          <View style={{width:"100%", alignItems:"center"}}>
                              <Text style={{
                                  textAlign: 'center', 
                                  color:"white"}}
                              >
                                  { this.props.joueurs[4] }
                              </Text>
                          </View>
                      </Button>
  } else {
      joueurFive = <View></View>
  }

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{color:"white"}}>Info</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.props.joueurs[0] }</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.props.joueurs[1] }</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.props.joueurs[2] }</Text>
          </View>
        </Button>
        {joueurFour}
        {joueurFive}
        </View>
        
        
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