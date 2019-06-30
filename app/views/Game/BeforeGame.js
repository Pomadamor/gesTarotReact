import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';

class BeforeGame extends Component {
  render(){
      const turnBefore =  this.props.turns
      if( this.props.nbJoueur.length>3){
        joueurFour = <Button bordered light 
                        backgroundColor={  turnBefore.preneur == 'Joueur 4' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
                        onPress={() =>  turnBefore.navigation.navigate("Stat")}
                        style={{flex:1, height:60, margin:1}} 
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text style={{
                                textAlign: 'center', 
                                color:"white"}}>{  turnBefore.preneur == 'Joueur 4' ?  turnBefore.preneurScore 
                                :  turnBefore.partenaire == 'Joueur 4' ?  turnBefore.partenaireScore
                                :  turnBefore.partenaire == 'Joueur 4' &&  turnBefore.preneur == 'Joueur 4' ?  turnBefore.partenaireScore +  turnBefore.preneurScore 
                                :  turnBefore.autreScore }</Text>
                        </View>
                    </Button>
      } else {
          joueurFour = <View></View>
      }
   
      if( this.props.nbJoueur.length>4){
          joueurFive =    <Button bordered light 
                              backgroundColor={  turnBefore.preneur == 'Joueur 5' ? "green" : 'rgba(52, 52, 52, 0.6)' }
                              onPress={() =>  turnBefore.navigation.navigate("Stat")}
                              style={{flex:1, height:60, margin:1}} 
                            >
                            <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{
                                    textAlign: 'center', 
                                    color:"white"}}>{  turnBefore.preneur == 'Joueur 5' ?  turnBefore.preneurScore 
                                    :  turnBefore.partenaire == 'Joueur 5' ?  turnBefore.partenaireScore
                                    :  turnBefore.partenaire == 'Joueur 5' &&  turnBefore.preneur == 'Joueur 5' ?  turnBefore.partenaireScore +  turnBefore.preneurScore 
                                    :  turnBefore.autreScore }</Text>
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
          backgroundColor={  turnBefore.preneur == 'Joueur 1' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
          backgroundColor={  turnBefore.partenaire == 'Joueur 1' ? "yellow" : 'rgba(52, 52, 52, 0.6)'}
          onPress={() =>  turnBefore.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{  turnBefore.preneur == 'Joueur 1' ?  turnBefore.preneurScore 
                      :  turnBefore.partenaire == 'Joueur 1' ?  turnBefore.partenaireScore
                      :  turnBefore.partenaire == 'Joueur 1' &&  turnBefore.preneur == 'Joueur 1' ?  turnBefore.partenaireScore +  turnBefore.preneurScore 
                      :  turnBefore.autreScore }</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={  turnBefore.preneur == 'Joueur 2' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
          onPress={() =>  turnBefore.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1}} >
          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{  turnBefore.preneur == 'Joueur 2' ?  turnBefore.preneurScore 
                      :  turnBefore.partenaire == 'Joueur 2' ?  turnBefore.partenaireScore
                      :  turnBefore.partenaire == 'Joueur 2' &&  turnBefore.preneur == 'Joueur 2' ?  turnBefore.partenaireScore +  turnBefore.preneurScore 
                      :  turnBefore.autreScore }</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={  turnBefore.preneur == 'Joueur 3' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
          onPress={() =>  turnBefore.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{  turnBefore.preneur == 'Joueur 3' ?  turnBefore.preneurScore 
                      :  turnBefore.partenaire == 'Joueur 3' ?  turnBefore.partenaireScore
                      :  turnBefore.partenaire == 'Joueur 3' &&  turnBefore.preneur == 'Joueur 3' ?  turnBefore.partenaireScore +  turnBefore.preneurScore 
                      :  turnBefore.autreScore }</Text>
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

export default connect(mappropsToProps)(BeforeGame);