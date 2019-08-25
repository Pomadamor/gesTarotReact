import React, {Component} from "react";
import { View, Text } from "native-base";
import { Button } from 'native-base';

class BeforeGame extends Component {


  /**
s */
  render(){
      ("props of before:", this.props);
      //const turnBefore =  this.props.turns
      const turnBefore = this.props.turnBefore[0];
    //   ("turnBefore: ", turnBefore.preneur);
      if( turnBefore.nbJoueur>3){
        joueurFour = <Button bordered light 
                        backgroundColor={  
                          turnBefore.preneur == 'Joueur 4' ? "lightgreen" 
                          : turnBefore.partenaire == 'Joueur 4' ? "moccasin" 
                          :'rgba(52, 52, 52, 0.6)'  }
                        style={{flex:1, height:60, margin:1}} 
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text style={{
                                textAlign: 'center', 
                                color:"white"}}>{  turnBefore.scoreJ4 }</Text>
                        </View>
                    </Button>
      } else {
          joueurFour = <View></View>
      }
   
      if( turnBefore.nbJoueur>4){
          joueurFive =    <Button bordered light 
                              backgroundColor={  
                                turnBefore.preneur == 'Joueur 5' ? "lightgreen" 
                                : turnBefore.partenaire == 'Joueur 5' ? "moccasin" 
                                :'rgba(52, 52, 52, 0.6)'  }
                              style={{flex:1, height:60, margin:1}} 
                            >
                            <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{
                                    textAlign: 'center', 
                                    color:"white"}}>{  turnBefore.scoreJ5 }</Text>
                            </View>
                          </Button>
      } else {
          joueurFive = <View></View>
      }
  
      return (
          <View style={{flexDirection: 'row'}}>
          <Button bordered light 
          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
            <View style={{width:"100%", alignItems:"center"}}>
              <Text></Text>
              <Text style={{color:"white"}}>{ turnBefore.type}</Text>
              <Text style={{color:"white"}}>{ turnBefore.roi}</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={  
            turnBefore.preneur == 'Joueur 1' ? "lightgreen" 
            : turnBefore.partenaire == 'Joueur 1' ? "moccasin" 
            :'rgba(52, 52, 52, 0.6)'  }
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{  turnBefore.scoreJ1 }</Text>
            </View>
          </Button>
          <Button bordered light 
            backgroundColor={  
              turnBefore.preneur == 'Joueur 2' ? "lightgreen" 
              : turnBefore.partenaire == 'Joueur 2' ? "moccasin" 
              :'rgba(52, 52, 52, 0.6)'  }
            style={{flex:1, height:60, margin:1}} >
          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{  turnBefore.scoreJ2 }</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={  
            turnBefore.preneur == 'Joueur 3' ? "lightgreen" 
            : turnBefore.partenaire == 'Joueur 3' ? "moccasin" 
            :'rgba(52, 52, 52, 0.6)'  }
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{  turnBefore.scoreJ3 }</Text>
            </View>
          </Button>
          {joueurFour}
          {joueurFive}
          </View>
      )
    }
  }

export default (BeforeGame);