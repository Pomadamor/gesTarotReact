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
                                 Joueur 4
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
                                      Joueur 5
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
                      color:"white"}}>Joueur 1</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>Joueur 2</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>Joueur 3</Text>
            </View>
          </Button>
          {joueurFour}
          {joueurFive}
          </View>
      )
    }
  }

  
const mappropsToProps = (props) => {
  return props
}

export default connect(mappropsToProps)(InitGame);