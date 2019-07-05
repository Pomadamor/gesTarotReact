import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';

class InitGame extends Component {

  render(){

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
                                 {this.props.pseudo4}
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
                                      {this.props.pseudo5}
                                  </Text>
                              </View>
                          </Button>
      } else {
          joueurFive = <View></View>
      }
  
      return (
          <View style={{ flexDirection: 'row'}}>
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
                      color:"white"}}>{this.props.pseudo}</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{this.props.pseudo2}</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{this.props.pseudo3}</Text>
            </View>
          </Button>
          {joueurFour}
          {joueurFive}
          </View>
      )
    }
  }

  
const mapStateToProps = state => {
    return {
      joueurs : state.toogleScore.joueurs,
      nbJoueur : state.toogleScore.nbJoueur,
      pseudo : state.tooglePlayer.pseudo,
      pseudo5 : state.tooglePlayer.pseudo5,
      pseudo2 : state.tooglePlayer.pseudo2,
      pseudo3 : state.tooglePlayer.pseudo3,
      pseudo4 : state.tooglePlayer.pseudo4
    }
}

export default connect(mapStateToProps)(InitGame);