import React, {Component} from "react";
import { View, Text } from "native-base";
import { Button } from 'native-base';

class BeforeGame extends Component {


    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
  render(){
      //const turnBefore =  this.props.turns
      // console.log("TURNBERFORE",this.props.turnBefore[0])
      const turnBefore = this.props.turnBefore;
    // //   ("turnBefore: ", turnBefore.preneur);
    // console.log("TURNBERFORE NBJOUEUR",turnBefore.nbJoueur)
    // console.log("TURNBERFORE PRENEUR",turnBefore.preneur)
    // console.log("TURNBERFORE PARTENAIRE",turnBefore.partenaire)
    // console.log("TURNBERFORE SCOREJ1",toString(turnBefore.scoreJ1))
    // console.log("TURNBERFORE SCOREJ2",turnBefore.scoreJ2.toString())
    // console.log("TURNBERFORE SCOREJ3",turnBefore.scoreJ3)
    // console.log("TURNBERFORE TYPE",turnBefore.type)
    // console.log("TURNBERFORE ROI",turnBefore.roi)



      if( turnBefore.nbJoueur){
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
                                color:"white"}}>{  turnBefore.scoreJ4.toString() }</Text>
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
                                    color:"white"}}>{  turnBefore.scoreJ5.toString() }</Text>
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
                      color:"white"}}>{  turnBefore.scoreJ1.toString() }</Text>
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
                      color:"white"}}>{  turnBefore.scoreJ2.toString() }</Text>
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
                      color:"white"}}>{  turnBefore.scoreJ3.toString() }</Text>
            </View>
          </Button>
          {joueurFour}
          {joueurFive}
          </View>
      )
    }
  }

export default (BeforeGame);