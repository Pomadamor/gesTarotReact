import React, {Component} from "react";
import { View, Text } from "native-base";
import { connect } from 'react-redux'
import { Button } from 'native-base';
import CalculScoreInviduel from "./CalculScoreInviduel";

class CalculScore extends Component {
  render(){

    if( parseInt(this.props.score) != ""){      
        if(this.props.bou == 0){
            if( parseInt(this.props.score) > 55){
                this.props.victoire = true
                if(this.props.partenaire != ""){

                    if(this.props.type == "Petite"){
                        
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)-56+25)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score) - 56 + 25}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value: -( parseInt(this.props.score) - 56 + 25)}
                        
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "Garde"){                    
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score) + 50 - 56)*2 }
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value: parseInt(this.props.score) + 50   - 56}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score) +50    - 56)}
                        
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                
                    } else if(this.props.type == "G-Sans"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +100    - 56)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +100   - 56}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +100    - 56)}
                
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "G-Contre"){
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +200    - 56)*2}
                        const actionPartenaireScore = { type: "MUTATION_PARTENAIRESCORE", value:  parseInt(this.props.score)  +200   - 56}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +200    - 56)}
                     
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPartenaireScore)
                        this.props.dispatch(actionPreneurScore)
                    
                    }
                }else{
                    if(this.props.type == "Petite"){
                        ("resultat Petite:",( parseInt(this.props.score) +50 - 56)*(this.props.nbJoueur - 1))
                        const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: ( parseInt(this.props.score)  +25    - 56)*(this.props.nbJoueur - 1)}
                        const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:-( parseInt(this.props.score)  +25    - 56)}
                    
                        this.props.dispatch(actionAutreScore)
                        this.props.dispatch(actionPreneurScore)

                    } else if(this.props.type == "Garde"){
                        ("resultat Garde:",( parseInt(this.props.score) +50 - 56)*(this.props.nbJoueur - 1))
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
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)              
                } else if(this.props.type == "Garde"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +50   - 51)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +50   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Sans"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +100   - 51)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +100   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)
                } else if(this.props.type == "G-Contre"){
                    const actionPreneurScore = { type: "MUTATION_PRENEURSCORE", value: -(( parseInt(this.props.score)  +200   - 51)*(this.props.nbJoueur - 1))}
                    const actionAutreScore = { type: "MUTATION_AUTRESCORE", value:( parseInt(this.props.score)  +200   - 51)}
                
                    this.props.dispatch(actionAutreScore)
                    this.props.dispatch(actionPreneurScore)
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

  
      return (
          <View style={{flexDirection: 'row'}}>
          <CalculScoreInviduel/>
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

export default connect(mapStateToProps)(CalculScore);