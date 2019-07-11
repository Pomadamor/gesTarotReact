import React, {Component} from "react";
import { View } from "native-base";
import { connect } from 'react-redux'

 class CalculScoreIndividuel extends Component {
  render(){
    console.log("PPPLLLOOOPPP0",this.props.calcul)
    // if(this.props.calcul = 0){
        console.log("PPPLLLOOOPPP")
        if(this.props.preneur == 'Joueur 1'){
            console.log("PPPLLLOOOPPP3",this.props.preneurScore)
            const actionScore1 = { type: "MUTATION_SCORE_J1", value:(this.props.scoreJ1 + this.props.preneurScore)}
            this.props.dispatch(actionScore1)
            // const actionCalcul = { type: "MUTATION_CALCUL", value:this.props.calcul+1}
            // this.props.dispatch(actionCalcul)
        } else if(this.props.partenaire == 'Joueur 1'){
            const actionScore1 = { type: "MUTATION_SCORE_J1", value:(this.props.scoreJ1 + this.props.partenaireScore)}
            this.props.dispatch(actionScore1)
        } else if(this.props.partenaire == 'Joueur 1' && this.props.preneur == 'Joueur 1'){
            const actionScore1 = { type: "MUTATION_SCORE_J1", value:this.props.this.props.scoreJ1 + this.props.partenaireScore + this.props.partenaireScore }
            this.props.dispatch(actionScore1) 
       }

         if(this.props.preneur == 'Joueur 2'){
            this.props.scoreJ2 = this.props.scoreJ2 + this.props.preneurScore
            const actionScore2 = { type: "MUTATION_SCORE_J2", value:this.props.scoreJ2}
            this.props.dispatch(actionScore2)
            const actionCalcul = { type: "MUTATION_CALCUL", value:1}
            this.props.dispatch(actionCalcul)
        } else if(this.props.partenaire == 'Joueur 2'){
            this.props.scoreJ2 = this.props.scoreJ2 + this.props.partenaireScore
            const actionScore2 = { type: "MUTATION_SCORE_J2", value:this.props.scoreJ2}
            this.props.dispatch(actionScore2)
            const actionCalcul = { type: "MUTATION_CALCUL", value:1}
            this.props.dispatch(actionCalcul)
        } else if(this.props.partenaire == 'Joueur 2' && this.props.preneur == 'Joueur 2'){
            this.props.scoreJ2 = this.props.scoreJ2 + this.props.partenaireScore + this.props.partenaireScore
            const actionScore2 = { type: "MUTATION_SCORE_J2", value:this.props.scoreJ2}
            this.props.dispatch(actionScore2) 
            const actionCalcul = { type: "MUTATION_CALCUL", value:1}
            this.props.dispatch(actionCalcul)
        }

         if(this.props.preneur == 'Joueur 3'){
            this.props.scoreJ3 = this.props.scoreJ3 + this.props.preneurScore
            const actionScore3 = { type: "MUTATION_SCORE_J3", value:this.props.scoreJ3}
            this.props.dispatch(actionScore3)
        } else if(this.props.partenaire == 'Joueur 3'){
            this.props.scoreJ3 = this.props.scoreJ3 + this.props.partenaireScore
            const actionScore3 = { type: "MUTATION_SCORE_J3", value:this.props.scoreJ3}
            this.props.dispatch(actionScore3)
        } else if(this.props.partenaire == 'Joueur 3' && this.props.preneur == 'Joueur 3'){
            this.props.scoreJ3 = this.props.scoreJ3 + this.props.partenaireScore + this.props.partenaireScore 
            const actionScore3 = { type: "MUTATION_SCORE_J3", value:this.props.scoreJ3}
            this.props.dispatch(actionScore3)
        }
        if(this.props.preneur == 'Joueur 4'){
            this.props.scoreJ4 = this.props.scoreJ4 + this.props.preneurScore
            const actionScore4 = { type: "MUTATION_SCORE_J3", value:this.props.scoreJ4}
            this.props.dispatch(actionScore4)
        } else if(this.props.partenaire == 'Joueur 4'){
            this.props.scoreJ4 = this.props.scoreJ4 + this.props.partenaireScore
            const actionScore4 = { type: "MUTATION_SCORE_J3", value:this.props.scoreJ4}
            this.props.dispatch(actionScore4)
        } else if(this.props.partenaire == 'Joueur 4' && this.props.preneur == 'Joueur 4'){
            this.props.scoreJ4 = this.props.scoreJ4 + this.props.partenaireScore + this.props.partenaireScore 
            const actionScore4 = { type: "MUTATION_SCORE_J3", value:this.props.scoreJ4}
            this.props.dispatch(actionScore4)
        }
        if(this.props.preneur == 'Joueur 5'){
            this.props.scoreJ5 = this.props.scoreJ5 + this.props.preneurScore
            const actionScore5 = { type: "MUTATION_SCORE_J5", value:this.props.scoreJ5}
            this.props.dispatch(actionScore5)
        } else if(this.props.partenaire == 'Joueur 5'){
            this.props.scoreJ5 = this.props.scoreJ5 + this.props.partenaireScore
            const actionScore5 = { type: "MUTATION_SCORE_J5", value:this.props.scoreJ5}
            this.props.dispatch(actionScore5)
        } else if(this.props.partenaire == 'Joueur 5' && this.props.preneur == 'Joueur 5'){
            this.props.scoreJ5 = this.props.scoreJ5 + this.props.partenaireScore + this.props.partenaireScore
            const actionScore5 = { type: "MUTATION_SCORE_J5", value:this.props.scoreJ5}
            this.props.dispatch(actionScore5)
        // }
    }
        return (
            <View style={{flexDirection: 'row'}}>
            </View>
        )
    }
  }

 const mapStateToProps = state => {
    return {
        calcul : state.tooglePlayer.calcul,
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

 export default connect(mapStateToProps)(CalculScoreIndividuel); 