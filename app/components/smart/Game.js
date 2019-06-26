import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';

class Game extends Component {

  buttonTurn(){
    this.props.id = this.props.id+1
    this.props.buttonTurnView = `tour n°${this.props.id}`
    this.setprops(this.props);
    this.props.navigation.navigate("GrillChoose",{
      nbJoueur:this.props.joueurs.length,
      idTurn:this.props.id
    })

    // this.props.buttonTurnView = 1
    // this.setprops(this.props);
    // console.log(this.props.turns.type.length, this.props.turns.score.length)
    
    // if(this.props.turns.type.length != this.props.turns.score.length){
    //   this.props.dialogVisible = true
    //   this.setprops(this.props);

    // }
    // else if(
    //   this.props.preneur != "" &&
    //   this.props.roi != "" &&
    //   this.props.type != ""
    // ){
    //   this.props.turns.id.push(this.props.buttonTurnView)
    //   this.props.turns.preneur.push(this.props.preneur)
    //   this.props.turns.roi.push(this.props.roi)
    //   this.props.turns.type.push(this.props.type)

    //   this.props.preneur = ""
    //   this.props.roi = ""
    //   this.props.type = ""
    //   this.setprops(this.props);
    // }
    // this.setprops(this.props);
  }

  componentDidMount(){
    console.log("Bientot au bout", this.props.preneur)

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
                      <View style={{width:"100%", alignjoueurs:"center"}}>
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
                          <View style={{width:"100%", alignjoueurs:"center"}}>
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
          <View style={{width:"100%", alignjoueurs:"center"}}>
            <Text style={{color:"white"}}>Info</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignjoueurs:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.props.joueurs[0] }</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignjoueurs:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.props.joueurs[1] }</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignjoueurs:"center"}}>
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
            { this.props.buttonTurnView == 0 ? "Démarrer la partie" : this.props.buttonTurnView }
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

export default connect(mappropsToProps)(Game);

