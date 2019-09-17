import React, {Component} from "react";
import { View, Text, Button } from "native-base";
import { connect } from 'react-redux'
import { Image } from 'react-native';

class LiveGame extends Component {

    /**
 * ce rendu affiche la ligne de score du tour en cour
 */
  render(){

    console.log("----------------", this.props.scoreJ1)

      if(this.props.nbJoueur>3){
        joueurFour = <Button bordered light 
                        backgroundColor={  
                          turnBefore.preneur == 'Joueur 4' ? "lightgreen" 
                          : turnBefore.partenaire == 'Joueur 4' ? "moccasin" 
                          :'rgba(52, 52, 52, 0.6)'  }
                        style={{flex:1, height:60, margin:1}} 
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text style={  
                          turnBefore.preneur == 'Joueur 4' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 4' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >{ this.props.scoreJ4 }</Text>
                        </View>
                    </Button>
      } else {
          joueurFour = <View></View>
      }
   
      if(this.props.nbJoueur>4){
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
                          color:"white"}  } >{ this.props.scoreJ5}</Text>
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
              <Text style={{flex:1,color:"white", fontSize:15}}>{ this.props.type}</Text>
              <Image style={{flex:1,color:"white", height:10, width:20}}
              source={
                this.props.roi == 'Coeur' ? require("../../assets/img/icon_carte/cards-heart.png") 
              : this.props.roi == 'Trefle' ? require("../../assets/img/icon_carte/cards-club.png")
              : this.props.roi == 'Carreau' ? require("../../assets/img/icon_carte/cards-diamond.png")
              : this.props.roi == 'Pique' ? require("../../assets/img/icon_carte/cards-spade.png")
              : null
              } />

            </View>
          </Button>

          <Button bordered light 
          backgroundColor={  
            turnBefore.preneur == 'Joueur 1' ? "lightgreen" 
            : turnBefore.partenaire == 'Joueur 1' ? "moccasin" 
            :'rgba(52, 52, 52, 0.6)'  }
          // backgroundColor={ this.props.partenaire == 'Joueur 1' ? "yellow" : 'rgba(52, 52, 52, 0.6)'}
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={  
                          turnBefore.preneur == 'Joueur 1' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold' ,textDecorationLine: 'underline'} 
                          : turnBefore.partenaire == 'Joueur 1' ? {textAlign: 'center', 
                          color:"white", fontWeight:'bold'}
                          :{textAlign: 'center', 
                          color:"white"}  } >{this.props.scoreJ1}</Text>
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
                          color:"white"}  } >{this.props.scoreJ2}</Text>
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
                          color:"white"}  } >{ this.props.scoreJ3 }</Text>
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
        nbJoueur : state.toogleScore.nbJoueur,
        joueurs : state.toogleScore.joueurs,
        partenaire : state.toogleScore.partenaire,
        victoire : state.toogleScore.victoire,
        score : state.toogleScore.score,
        type : state.toogleScore.type,
        roi : state.toogleScore.roi,
        bou : state.toogleScore.bou,
        preneur : state.toogleScore.preneur,
        autreScore : state.toogleScore.autreScore,
        partenaireScore : state.toogleScore.partenaireScore,
        preneurScore : state.toogleScore.preneurScore,
        scoreJ1 : state.tooglePlayer.scoreJ1,
        scoreJ2 : state.tooglePlayer.scoreJ2,
        scoreJ3 : state.tooglePlayer.scoreJ3,
        scoreJ4 : state.tooglePlayer.scoreJ4,
        scoreJ5 : state.tooglePlayer.scoreJ5

    }
}

export default connect(mapStateToProps)(LiveGame);