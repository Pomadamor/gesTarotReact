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

    if(this.props.score != ""){
        if(this.props.bou == 0){
            console.log("0 bout")
          if(this.props.score > 55){
            console.log("score superieur a 55")
            this.props.victoire = true
            if(this.props.partenaire != ""){
                console.log("Avec 1 partenaire")
              if(this.props.type = "Petite"){
                  
                console.log("petite")
                const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: (this.props.score - 56 + 25)*2}
                const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: this.props.score - 56 + 25}
                const actionAutreScore = { type: "MUTATION_AUTRESCORE", value: -(this.props.score - 56 + 25)}
                
                this.props.dispatch(actionAutreScore)
                this.props.dispatch(actionPartenaireScore)
                this.props.dispatch(actionPreneurScore)

              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 56)*2
                this.props.partenaireScore = 50 + this.props.score - 56
                this.props.autreScore = -(50 + this.props.score - 56)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 56)*2
                this.props.partenaireScore = 100 + this.props.score - 56
                this.props.autreScore = -(100 + this.props.score - 56)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 56)*2
                this.props.partenaireScore = 200 + this.props.score - 56
                this.props.autreScore = -(200 + this.props.score - 56)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 56)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(25 + this.props.score - 56)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 56)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(50 + this.props.score - 56)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 56)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(100 + this.props.score - 56)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 56)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(200 + this.props.score - 56)
              }          
            }
          }else{
            this.props.victoire = false
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 56)*2
                this.props.partenaireScore = -(25 + this.props.score - 56)
                this.props.autreScore = (25 + this.props.score - 56)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 56)*2)
                this.props.partenaireScore = -(50 + this.props.score - 56)
                this.props.autreScore = (50 + this.props.score - 56)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 56)*2)
                this.props.partenaireScore = -(100 + this.props.score - 56)
                this.props.autreScore = (100 + this.props.score - 56)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 56)*2)
                this.props.partenaireScore = -(200 + this.props.score - 56)
                this.props.autreScore = (200 + this.props.score - 56)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 56)*(this.props.nbJoueur - 1)
                this.props.autreScore = (25 + this.props.score - 56)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 56)*(this.props.nbJoueur - 1))
                this.props.autreScore = (50 + this.props.score - 56)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 56)*(this.props.nbJoueur - 1))
                this.props.autreScore = (100 + this.props.score - 56)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 56)*(this.props.nbJoueur - 1))
                this.props.autreScore = (200 + this.props.score - 56)
              }
            }
          }
        }else if(this.props.bou == 1){
          if(this.props.score > 50){
            this.props.victoire = true
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 51)*2
                this.props.partenaireScore = 25 + this.props.score - 51
                this.props.autreScore = -(25 + this.props.score - 51)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 51)*2
                this.props.partenaireScore = 50 + this.props.score - 51
                this.props.autreScore = -(50 + this.props.score - 51)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 51)*2
                this.props.partenaireScore = 100 + this.props.score - 51
                this.props.autreScore = -(100 + this.props.score - 51)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 51)*2
                this.props.partenaireScore = 200 + this.props.score - 51
                this.props.autreScore = -(200 + this.props.score - 51)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 51)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(25 + this.props.score - 51)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 51)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(50 + this.props.score - 51)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 51)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(100 + this.props.score - 51)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 51)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(200 + this.props.score - 51)
              }          
            }
          }else{
            this.props.visctoire = false
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 51)*2
                this.props.partenaireScore = -(25 + this.props.score - 51)
                this.props.autreScore = (25 + this.props.score - 51)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 51)*2)
                this.props.partenaireScore = -(50 + this.props.score - 51)
                this.props.autreScore = (50 + this.props.score - 51)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 51)*2)
                this.props.partenaireScore = -(100 + this.props.score - 51)
                this.props.autreScore = (100 + this.props.score - 51)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 51)*2)
                this.props.partenaireScore = -(200 + this.props.score - 51)
                this.props.autreScore = (200 + this.props.score - 51)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 51)*(this.props.nbJoueur - 1)
                this.props.autreScore = (25 + this.props.score - 51)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 51)*(this.props.nbJoueur - 1))
                this.props.autreScore = (50 + this.props.score - 51)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 51)*(this.props.nbJoueur - 1))
                this.props.autreScore = (100 + this.props.score - 51)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 51)*(this.props.nbJoueur - 1))
                this.props.autreScore = (200 + this.props.score - 51)
              }
            }
          }
        }else if(this.props.bou == 2){
          if(this.props.score > 40){
            this.props.victoire = true
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 41)*2
                this.props.partenaireScore = 25 + this.props.score - 41
                this.props.autreScore = -(25 + this.props.score - 41)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 41)*2
                this.props.partenaireScore = 50 + this.props.score - 41
                this.props.autreScore = -(50 + this.props.score - 41)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 41)*2
                this.props.partenaireScore = 100 + this.props.score - 41
                this.props.autreScore = -(100 + this.props.score - 41)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 41)*2
                this.props.partenaireScore = 200 + this.props.score - 41
                this.props.autreScore = -(200 + this.props.score - 41)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 41)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(25 + this.props.score - 41)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 41)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(50 + this.props.score - 41)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 41)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(100 + this.props.score - 41)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 41)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(200 + this.props.score - 41)
              }          
            }
          }else{
            this.props.victoire = false
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 41)*2
                this.props.partenaireScore = -(25 + this.props.score - 41)
                this.props.autreScore = (25 + this.props.score - 41)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 41)*2)
                this.props.partenaireScore = -(50 + this.props.score - 41)
                this.props.autreScore = (50 + this.props.score - 41)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 41)*2)
                this.props.partenaireScore = -(100 + this.props.score - 41)
                this.props.autreScore = (100 + this.props.score - 41)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 41)*2)
                this.props.partenaireScore = -(200 + this.props.score - 41)
                this.props.autreScore = (200 + this.props.score - 41)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 41)*(this.props.nbJoueur - 1)
                this.props.autreScore = (25 + this.props.score - 41)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 41)*(this.props.nbJoueur - 1))
                this.props.autreScore = (50 + this.props.score - 41)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 41)*(this.props.nbJoueur - 1))
                this.props.autreScore = (100 + this.props.score - 41)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 41)*(this.props.nbJoueur - 1))
                this.props.autreScore = (200 + this.props.score - 41)
              }
            }
          }
        }else if(this.props.bou == 3){
          if(this.props.score > 35){
            this.props.victoire = true
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 36)*2
                this.props.partenaireScore = 25 + this.props.score - 36
                this.props.autreScore = -(25 + this.props.score - 36)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 36)*2
                this.props.partenaireScore = 50 + this.props.score - 36
                this.props.autreScore = -(50 + this.props.score - 36)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 36)*2
                this.props.partenaireScore = 100 + this.props.score - 36
                this.props.autreScore = -(100 + this.props.score - 36)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 36)*2
                this.props.partenaireScore = 200 + this.props.score - 36
                this.props.autreScore = -(200 + this.props.score - 36)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = (25 + this.props.score - 36)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(25 + this.props.score - 36)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = (50 + this.props.score - 36)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(50 + this.props.score - 36)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = (100 + this.props.score - 36)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(100 + this.props.score - 36)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = (200 + this.props.score - 36)*(this.props.nbJoueur - 1)
                this.props.autreScore = -(200 + this.props.score - 36)
              }          
            }
          }else{
            this.props.victoire = false
            if(this.props.partenaire != ""){
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 36)*2
                this.props.partenaireScore = -(25 + this.props.score - 36)
                this.props.autreScore = (25 + this.props.score - 36)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 36)*2)
                this.props.partenaireScore = -(50 + this.props.score - 36)
                this.props.autreScore = (50 + this.props.score - 36)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 36)*2)
                this.props.partenaireScore = -(100 + this.props.score - 36)
                this.props.autreScore = (100 + this.props.score - 36)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 36)*2)
                this.props.partenaireScore = -(200 + this.props.score - 36)
                this.props.autreScore = (200 + this.props.score - 36)
              }
            }else{
              if(this.props.type = "Petite"){
                this.props.preneurScore = -(25 + this.props.score - 56)*(this.props.nbJoueur - 1)
                this.props.autreScore = (25 + this.props.score - 56)
              } else if(this.props.type = "Garde"){
                this.props.preneurScore = -((50 + this.props.score - 56)*(this.props.nbJoueur - 1))
                this.props.autreScore = (50 + this.props.score - 56)
              } else if(this.props.type = "G-Sans"){
                this.props.preneurScore = -((100 + this.props.score - 56)*(this.props.nbJoueur - 1))
                this.props.autreScore = (100 + this.props.score - 56)
              } else if(this.props.type = "G-Contre"){
                this.props.preneurScore = -((200 + this.props.score - 56)*(this.props.nbJoueur - 1))
                this.props.autreScore = (200 + this.props.score - 56)
              }
            }
          }
        }
      }
      console.log(this.props.autreScore)
      if(this.props.joueurs.length>3){
        joueurFour = <Button bordered light 
                        backgroundColor={ this.props.preneur == 'Joueur 4' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
                        onPress={() => this.props.navigation.navigate("Stat")}
                        style={{flex:1, height:60, margin:1}} 
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text style={{
                                textAlign: 'center', 
                                color:"white"}}>{ this.props.preneur == 'Joueur 4' ? this.props.preneurScore 
                                : this.props.partenaire == 'Joueur 4' ? this.props.partenaireScore
                                : this.props.partenaire == 'Joueur 4' && this.props.preneur == 'Joueur 4' ? this.props.partenaireScore + this.props.preneurScore 
                                : this.props.autreScore }</Text>
                        </View>
                    </Button>
      } else {
          joueurFour = <View></View>
      }
   
      if(this.props.joueurs.length>4){
          joueurFive =    <Button bordered light 
                              backgroundColor={ this.props.preneur == 'Joueur 5' ? "green" : 'rgba(52, 52, 52, 0.6)' }
                              onPress={() => this.props.navigation.navigate("Stat")}
                              style={{flex:1, height:60, margin:1}} 
                            >
                            <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{
                                    textAlign: 'center', 
                                    color:"white"}}>{ this.props.preneur == 'Joueur 5' ? this.props.preneurScore 
                                    : this.props.partenaire == 'Joueur 5' ? this.props.partenaireScore
                                    : this.props.partenaire == 'Joueur 5' && this.props.preneur == 'Joueur 5' ? this.props.partenaireScore + this.props.preneurScore 
                                    : this.props.autreScore }</Text>
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
              <Text style={{color:"white"}}>{this.props.type}</Text>
              <Text style={{color:"white"}}>{this.props.roi}</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={ this.props.preneur == 'Joueur 1' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
          backgroundColor={ this.props.partenaire == 'Joueur 1' ? "yellow" : 'rgba(52, 52, 52, 0.6)'}
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{ this.props.preneur == 'Joueur 1' ? this.props.preneurScore 
                      : this.props.partenaire == 'Joueur 1' ? this.props.partenaireScore
                      : this.props.partenaire == 'Joueur 1' && this.props.preneur == 'Joueur 1' ? this.props.partenaireScore + this.props.preneurScore 
                      : this.props.autreScore }</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={ this.props.preneur == 'Joueur 2' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1}} >
          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{ this.props.preneur == 'Joueur 2' ? this.props.preneurScore 
                      : this.props.partenaire == 'Joueur 2' ? this.props.partenaireScore
                      : this.props.partenaire == 'Joueur 2' && this.props.preneur == 'Joueur 2' ? this.props.partenaireScore + this.props.preneurScore 
                      : this.props.autreScore }</Text>
            </View>
          </Button>
          <Button bordered light 
          backgroundColor={ this.props.preneur == 'Joueur 3' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
          onPress={() => this.props.navigation.navigate("Stat")}
          style={{flex:1, height:60, margin:1}} >
            <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{
                      textAlign: 'center', 
                      color:"white"}}>{ this.props.preneur == 'Joueur 3' ? this.props.preneurScore 
                      : this.props.partenaire == 'Joueur 3' ? this.props.partenaireScore
                      : this.props.partenaire == 'Joueur 3' && this.props.preneur == 'Joueur 3' ? this.props.partenaireScore + this.props.preneurScore 
                      : this.props.autreScore }</Text>
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