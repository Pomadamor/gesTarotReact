import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';

class LiveGame extends Component {
  render(){

    if ( this.props.joueurs.length == 0 ) {
        const nbJoueurChoose = this.props.nbJoueur;
    
        for(let i = 1; i <= nbJoueurChoose; i++){
          this.props.joueurs.push(`Joueur ${i}`)
        }
      }

    if( parseInt( parseInt( parseInt(this.props.score))) != ""){      
        if(this.props.bou == 0){
            console.log("0 bout")
            if( parseInt(this.props.score) > 55){
                console.log("score superieur a 55")
                this.props.victoire = true
                if(this.props.partenaire != ""){
                    console.log("Avec 1 partenaire")

                    if(this.props.type == "Petite"){
                        console.log("petite")
                        
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)-56+25)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score) - 56 + 25}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value: -( parseInt(this.props.score) - 56 + 25)}
                        
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "Garde"){
                        console.log("Garde")
                    
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score) + 50 - 56)*2 }
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: parseInt(this.props.score) + 50   - 56}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score) +50    - 56)}
                        
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                
                    } else if(this.props.type == "G-Sans"){
                        console.log("Garde-Sans")

                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100    - 56)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +100   - 56}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100    - 56)}
                
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "G-Contre"){
                        console.log("Garde-Contre")

                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200    - 56)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +200   - 56}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200    - 56)}
                     
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                    }
                }else{
                    console.log("pas de partenaire")
                    if(this.props.type == "Petite"){
                        console.log("resultat Petite:",( parseInt(this.props.score) +50 - 56)*(this.props.nbJoueur - 1))
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25    - 56)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "Garde"){
                        console.log("resultat Garde:",( parseInt(this.props.score) +50 - 56)*(this.props.nbJoueur - 1))
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score) +50 - 56)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100    - 56)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200    - 56)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)
                    }          
                }
            }else{
                this.props.victoire = false
                if(this.props.partenaire != ""){
                    if(this.props.type == "Petite"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -( parseInt(this.props.score)  +25    - 56)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +25    - 56)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                    } else if(this.props.type == "Garde"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +50    - 56)*2)}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +50    - 56)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100    - 56)*2)}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +100    - 56)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +200    - 56)*2)}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +200    - 56)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                    }
                }else{
                    if(this.props.type == "Petite"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -( parseInt(this.props.score)  + parseInt(this.props.score) + 25 - 56)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  + parseInt(this.props.score) + 25  - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "Garde"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  + parseInt(this.props.score)  + 50 - 56)*(this.props.nbJoueur - 1))}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  + parseInt(this.props.score)  + 50 - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                 
                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100    - 56)*(this.props.nbJoueur - 1))}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                   
                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +200    - 56)*(this.props.nbJoueur - 1))}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                   
                    }
                }
            }
            }else if(this.props.bou == 1){
            if( parseInt(this.props.score) > 50){
                this.props.victoire = true
                if(this.props.partenaire != ""){
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25   - 51)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +25   - 51}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +50   - 51)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +50   - 51}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100   - 51)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +100   - 51}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200   - 51)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: parseInt(this.props.score)  + 200   - 51}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                }
                
            
            }else{
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25   - 51)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25   - 51)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)                
                
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +50   - 51)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50   - 51)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)                
                
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100   - 51)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)                
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200   - 51)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)              
                }          
                }
            }else{
                this.props.visctoire = false
                if(this.props.partenaire != ""){
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:-( parseInt(this.props.score)  +25   - 51)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +25   - 51)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25   - 51)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:-(( parseInt(this.props.score)  +50   - 51)*2)}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +50   - 51)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50   - 51)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100   - 51)*2)}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +100   - 51)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +200   - 51)*2)}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +200   - 51)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                }
                }else{
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -( parseInt(this.props.score)  +25   - 51)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25   - 51)}
                
                
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +50   - 51)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50   - 51)}
                
                
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100   - 51)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100   - 51)}
                
                
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +200   - 51)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200   - 51)}
                
                
                }
                }
            }
            }else if(this.props.bou == 2){
            if( parseInt(this.props.score) > 40){
                this.props.victoire = true
                if(this.props.partenaire != ""){
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25   - 41)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +25   - 41}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +50   - 41)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +50   - 41}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100   - 41)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +100   - 41}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200   - 41)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +200   - 41}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                }
                }else{
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25   - 41)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)              
                
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +50   - 41)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)              
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100   - 41)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)              
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200   - 41)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)              
                
                }          
                }
            }else{
                this.props.victoire = false
                if(this.props.partenaire != ""){
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -( parseInt(this.props.score)  +25   - 41)*2}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +25   - 41)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +50   - 41)*2)}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +50   - 41)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100   - 41)*2)}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +100   - 41)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(this.props.score)  +200   - 41)*2)}
                    const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +200   - 41)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPartenaireScore)
                    this.props.dispatch(actionPreneurScore)
                }
                }else{
                if(this.props.type == "Petite"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -( parseInt(this.props.score)  +25   - 41)*(this.props.nbJoueur - 1)}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)               
                
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +50   - 41)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)               
                
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(this.props.score)  +100   - 41)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100   - 41)}
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)               
                
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(this.props.score)  +200   - 41)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200   - 41)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)               
                }
                }
            }
            }else if(this.props.bou == 3){
                if( parseInt(this.props.score) > 35){
                    this.props.victoire = true
                    if(this.props.partenaire != ""){
                    if(this.props.type == "Petite"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25   - 36)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +25   - 36}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "Garde"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +50   - 36)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +50   - 36}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100   - 36)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +100   - 36}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200   - 36)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +200   - 36}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    }
                }else{
                    if(this.props.type == "Petite"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25   - 36)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25   - 36)}
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                   
                    
                    } else if(this.props.type == "Garde"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +50   - 36)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +50   - 36)}
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                   
                    
                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100   - 36)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100   - 36)}
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                   
                    
                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200   - 36)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)                 
                    }          
                }
            }else{
                this.props.victoire = false
                if(this.props.partenaire != ""){
                    if(this.props.type == "Petite"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -( parseInt(this.props.score)  +25   - 36)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +25   - 36)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "Garde"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +50   - 36)*2)}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +50   - 36)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100   - 36)*2)}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +100   - 36)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +200   - 36)*2)}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: -( parseInt(this.props.score)  +200   - 36)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200   - 36)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    }
                    }else{
                        if(this.props.type == "Petite"){
                            const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -( parseInt(this.props.score)  +25    - 56)*(this.props.nbJoueur - 1)}
                            const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +25    - 56)}
                            this.props.dispatch(actionAutreScore)
                            this.props.dispatch(actionPreneurScore)                    
                        
                        } else if(this.props.type == "Garde"){
                            const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(this.props.score)  +50    - 56)*(this.props.nbJoueur - 1))}
                            const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50    - 56)}
                            this.props.dispatch(actionAutreScore)
                            this.props.dispatch(actionPreneurScore)                    
                        
                        } else if(this.props.type == "G-Sans"){
                            const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(this.props.score)  +100    - 56)*(this.props.nbJoueur - 1))}
                            const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100    - 56)}
                            this.props.dispatch(actionAutreScore)
                            this.props.dispatch(actionPreneurScore)
                        
                        } else if(this.props.type == "G-Contre"){
                            const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value:  -(( parseInt(this.props.score)  +200    - 56)*(this.props.nbJoueur - 1))}
                            const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200    - 56)}
                            this.props.dispatch(actionAutreScore)
                            this.props.dispatch(actionPreneurScore)
                        
                        }
                    }
                }
            }
        }

      console.log(this.props.autreScore)
      if(this.props.joueurs.length>3){
        joueurFour = <Button bordered light 
                        backgroundColor={ this.props.preneur == 'Joueur 4' ? "green" : 'rgba(52, 52, 52, 0.6)'  }
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
        preneurScore : state.toogleScore.preneurScore
    }
}

export default connect(mapStateToProps)(LiveGame);