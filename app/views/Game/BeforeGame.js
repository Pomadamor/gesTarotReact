import React, {Component} from "react";
import { View, Text, Button } from "native-base";
import { Image } from 'react-native';

/**
 * Component permet d'afficher dans le tableau des scores les tours précédents
 */


class BeforeGame extends Component {

    /**
    * Ce rendu affiche la grill des tours précedant avec leurs détails
    * @param {string} preneur 
    * @param {string} partenaire 
    * @param {Int} nbJoueur 
    * @param {string} roi
    * @param {string} type
    * @param {Int} scoreJ1 
    * @param {Int} scoreJ2 
    * @param {Int} scoreJ3 
    * @param {Int} scoreJ4
    * @param {Int} scoreJ5
    */

  render(){
      console.log("TURNBERFORE",this.props.turnBefore)
      console.log("TURNBERFORE 1",this.props.turnBefore.nbJoueur)
      console.log("TURNBERFORE 1",turnBefore.nbJoueur)

      turnBefore = this.props.turnBefore

      if( turnBefore.nbJoueur > 3){
        joueurFour = <Button bordered light 
                        backgroundColor={  
                          turnBefore.preneur == 'Joueur 4' ? "lightgreen" 
                          : turnBefore.partenaire == 'Joueur 4' ? "moccasin" 
                          :'rgba(52, 52, 52, 0.6)'  }
                        style={{flex:1, height:60, margin:1}} 
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text 
                        style={  
                          turnBefore.preneur == 'Joueur 4' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 4' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >
                        {  turnBefore.scoreJ4 }</Text>
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
                            <Text style={  
                          turnBefore.preneur == 'Joueur 5' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 5' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >{  turnBefore.scoreJ5 }</Text>
                            </View>
                          </Button>
      } else {
          joueurFive = <View></View>
      }
  
      return (
          <View style={{flexDirection: 'row'}}>
          <Button bordered light 
          style={{flex:1, height:60, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={{flex:1, color:"white"}}>{ turnBefore.type}</Text>
              <Image style={{flex:1, height:10, width:20}}
              source={
                turnBefore.roi == 'Coeur' ? require("../../assets/img/icon_carte/cards-heart.png") 
              : turnBefore.roi == 'Trefle' ? require("../../assets/img/icon_carte/cards-club.png")
              : turnBefore.roi == 'Carreau' ? require("../../assets/img/icon_carte/cards-diamond.png")
              : turnBefore.roi == 'Pique' ? require("../../assets/img/icon_carte/cards-spade.png")
              : null
              } />
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={  
            turnBefore.preneur == 'Joueur 1' ? "lightgreen" 
            : turnBefore.partenaire == 'Joueur 1' ? "moccasin" 
            :'rgba(52, 52, 52, 0.6)'  }
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={  
                          turnBefore.preneur == 'Joueur 1' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 1' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >{  turnBefore.scoreJ1 }</Text>
            </View>
          </Button>
          <Button bordered light 
            backgroundColor={  
              turnBefore.preneur == 'Joueur 2' ? "lightgreen" 
              : turnBefore.partenaire == 'Joueur 2' ? "moccasin" 
              :'rgba(52, 52, 52, 0.6)'  }
            style={{flex:1, height:60, margin:1}} >
          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={  
                          turnBefore.preneur == 'Joueur 2' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 2' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >{  turnBefore.scoreJ2 }</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={  
            turnBefore.preneur == 'Joueur 3' ? "lightgreen" 
            : turnBefore.partenaire == 'Joueur 3' ? "moccasin" 
            :'rgba(52, 52, 52, 0.6)'  }
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={  
                          turnBefore.preneur == 'Joueur 3' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 3' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >{  turnBefore.scoreJ3 }</Text>
            </View>
          </Button>
          {joueurFour}
          {joueurFive}
          </View>
      )
    }
  }

export default (BeforeGame);