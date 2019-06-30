import { connect } from 'react-redux'
import React, {Component} from "react";


class CalculScore extends Component {

  render(){
  
    if(this.props.score != ""){
      if(this.props.bou == 0){
        if(this.props.score > 55){
          this.props.victoire = true
          if(this.props.partenaire != ""){
            if(this.props.type = "Petite"){
              this.props.preneurScore = (25  + this.props.score - 56)}*2
              this.props.partenaireScore = 25 + this.props.score - 56
              this.props.autreScore = -(25  + this.props.score - 56)}
            } else if(this.props.type = "Garde"){
              this.props.preneurScore = (50  + this.props.score - 56)}*2
              this.props.partenaireScore = 50 + this.props.score - 56
              this.props.autreScore = -(50  + this.props.score - 56)}
            } else if(this.props.type = "G-Sans"){
              this.props.preneurScore = (100  + this.props.score - 56)}*2
              this.props.partenaireScore = 100 + this.props.score - 56
              this.props.autreScore = -(100  + this.props.score - 56)}
            } else if(this.props.type = "G-Contre"){
              this.props.preneurScore = (200  + this.props.score - 56)}*2
              this.props.partenaireScore = 200 + this.props.score - 56
              this.props.autreScore = -(200  + this.props.score - 56)}
            }
          }else{
            if(this.props.type = "Petite"){
              this.props.preneurScore = (25  + this.props.score - 56)}*(this.props.nbJoueur - 1)
              this.props.autreScore = -(25  + this.props.score - 56)}
            } else if(this.props.type = "Garde"){
              this.props.preneurScore = (50  + this.props.score - 56)}*(this.props.nbJoueur - 1)
              this.props.autreScore = -(50  + this.props.score - 56)}
            } else if(this.props.type = "G-Sans"){
              this.props.preneurScore = (100  + this.props.score - 56)}*(this.props.nbJoueur - 1)
              this.props.autreScore = -(100  + this.props.score - 56)}
            } else if(this.props.type = "G-Contre"){
              this.props.preneurScore = (200  + this.props.score - 56)}*(this.props.nbJoueur - 1)
              this.props.autreScore = -(200  + this.props.score - 56)}
            }          
          }
        }else{
          this.props.victoire = false
          if(this.props.partenaire != ""){
            if(this.props.type = "Petite"){
              this.props.preneurScore = -(25  + this.props.score - 56)}*2
              this.props.partenaireScore = -(25  + this.props.score - 56)}
              this.props.autreScore = (25  + this.props.score - 56)}
            } else if(this.props.type = "Garde"){
              this.props.preneurScore = -((50  + this.props.score - 56)}*2)
              this.props.partenaireScore = -(50  + this.props.score - 56)}
              this.props.autreScore = (50  + this.props.score - 56)}
            } else if(this.props.type = "G-Sans"){
              this.props.preneurScore = -((100  + this.props.score - 56)}*2)
              this.props.partenaireScore = -(100  + this.props.score - 56)}
              this.props.autreScore = (100  + this.props.score - 56)}
            } else if(this.props.type = "G-Contre"){
              this.props.preneurScore = -((200  + this.props.score - 56)}*2)
              this.props.partenaireScore = -(200  + this.props.score - 56)}
              this.props.autreScore = (200  + this.props.score - 56)}
            }
          }else{
            if(this.props.type = "Petite"){
              this.props.preneurScore = -(25  + this.props.score - 56)}*(this.props.nbJoueur - 1)
              this.props.autreScore = (25  + this.props.score - 56)}
            } else if(this.props.type = "Garde"){
              this.props.preneurScore = -((50  + this.props.score - 56)}*(this.props.nbJoueur - 1))
              this.props.autreScore = (50  + this.props.score - 56)}
            } else if(this.props.type = "G-Sans"){
              this.props.preneurScore = -((100  + this.props.score - 56)}*(this.props.nbJoueur - 1))
              this.props.autreScore = (100  + this.props.score - 56)}
            } else if(this.props.type = "G-Contre"){
              this.props.preneurScore = -((200  + this.props.score - 56)}*(this.props.nbJoueur - 1))
              this.props.autreScore = (200  + this.props.score - 56)}
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
          this.props.victoire = false
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
              this.props.preneurScore = -(25  + this.props.score - 56)}*(this.props.nbJoueur - 1)
              this.props.autreScore = (25  + this.props.score - 56)}
            } else if(this.props.type = "Garde"){
              this.props.preneurScore = -((50  + this.props.score - 56)}*(this.props.nbJoueur - 1))
              this.props.autreScore = (50  + this.props.score - 56)}
            } else if(this.props.type = "G-Sans"){
              this.props.preneurScore = -((100  + this.props.score - 56)}*(this.props.nbJoueur - 1))
              this.props.autreScore = (100  + this.props.score - 56)}
            } else if(this.props.type = "G-Contre"){
              this.props.preneurScore = -((200  + this.props.score - 56)}*(this.props.nbJoueur - 1))
              this.props.autreScore = (200  + this.props.score - 56)}
            }
          }
        }
      }
    }
    return(
      <Text>Hello Device</Text>
    )
  }

}
const mappropsToProps = (props) => {
  return props
}

export default connect(mappropsToProps)(CalculScore)
