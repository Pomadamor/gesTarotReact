import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';

class InitGame extends Component {

  btnChoose(nb){
    console.log(this.props.choosePlayer)
    const action = { type: "MUTATION_CHOOSE_PLAYER", value: nb }
    this.props.dispatch(action)
  }

  render(){

    if ( this.props.joueurs.length == 0 ) {
        const nbJoueurChoose = this.props.nbJoueur;
    
        for(let i = 1; i <= nbJoueurChoose; i++){
          this.props.joueurs.push(`Joueur ${i}`)
        }
      }
      
    if(this.props.joueurs.length>3){
        joueurFour = <Button bordered light 
                        onPress={() => this.btnChoose(nb=4)}
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
          onPress={() => this.btnChoose(nb=5)}
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
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
              <Text style={{color:"white"}}>Info</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.btnChoose(nb=1)}
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{this.props.pseudo1}</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.btnChoose(nb=2)}
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{this.props.pseudo2}</Text>
            </View>
          </Button>
          <Button bordered light 
          onPress={() => this.btnChoose(nb=3)}
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
      pseudo1 : state.tooglePlayer.pseudo1,
      pseudo5 : state.tooglePlayer.pseudo5,
      pseudo2 : state.tooglePlayer.pseudo2,
      pseudo3 : state.tooglePlayer.pseudo3,
      pseudo4 : state.tooglePlayer.pseudo4,
      choosePlayer: state.tooglePlayer.choosePlayer,
    }
}

export default connect(mapStateToProps)(InitGame);