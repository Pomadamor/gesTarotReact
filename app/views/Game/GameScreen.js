import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, Alert } from "react-native";
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base';
import InitGame from "./InitGame";
import LiveGame from "./LiveGame";
import BeforeGame from "./BeforeGame";
import { BackHandler } from 'react-native'
import { CalculScore } from "../../service/CalculScore";

class GameScreen extends Component {

  /**
   * fonction qui permet avec les deux suivante de géré le retour clavier
   * ainsi que de les resultat récupéré dans le service calculScore
   */
  componentDidMount() {
    console.log("point general", this.props)

    console.log('test info pour parti', 
      this.props.pseudo2, 
      this.props.pseudo3,
      this.props.pseudo4, 
      this.props.pseudo5)
    

    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

     const res = CalculScore(this.props.datas)
     console.log("test x",res)

     actionScoreJ1 = res[0]
     actionScoreJ2 = res[1]
     actionScoreJ3 = res[2]
     actionScoreJ4 = res[3]
     actionScoreJ5 = res[4]
    console.log("test z",actionScoreJ2)

    if (actionScoreJ1 != undefined) {
      this.props.dispatch(actionScoreJ1)
      this.props.dispatch(actionScoreJ2)
      this.props.dispatch(actionScoreJ3)
      this.props.dispatch(actionScoreJ4)
      this.props.dispatch(actionScoreJ5)
    }
  }

  btnSupprimer(){
      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: "Démarer" }
      const actionTurn = { type: "MUTATION_TURN", value: [] }
      const actionScore = { type: "MUTATION_SCORE", value: 0 }
      const actionType = { type: "MUTATION_TYPE", value: "" }
      const actionPreneur = { type: "MUTATION_PRENEUR", value: "" }
      const actionPartenaire = { type: "MUTATION_PARTENAIRE", value: "" }
      const actionRoi = { type: "MUTATION_ROI", value: "" }
      const actionScoreJ1 = { type: "MUTATION_SCORE_J1", value: ""}
      const actionScoreJ2 = { type: "MUTATION_SCORE_J2", value: ""}
      const actionScoreJ3 = { type: "MUTATION_SCORE_J3", value: ""}
      const actionScoreJ4 = { type: "MUTATION_SCORE_J4", value: ""}
      const actionScoreJ5 = { type: "MUTATION_SCORE_J5", value: ""}

      this.props.dispatch(actionBtnTurn)
      this.props.dispatch(actionTurn)
      this.props.dispatch(actionScore)
      this.props.dispatch(actionType)
      this.props.dispatch(actionPreneur)
      this.props.dispatch(actionPartenaire)
      this.props.dispatch(actionRoi)
      this.props.dispatch(actionScoreJ1)
      this.props.dispatch(actionScoreJ2)
      this.props.dispatch(actionScoreJ3)
      this.props.dispatch(actionScoreJ4)
      this.props.dispatch(actionScoreJ5)

      this.props.navigation.navigate("Home")
  }

  btnSauvegarder(){}


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);


  }

  handleBackPress = () => {
    this.props.navigation.navigate("FriendsPlayers"); // works best when the goBack is async
    return true;
  }

  /**
   * bouton permettant de naviguer entre les differentes grilles selon l'état d'avancement de la partie
   *  et de modifier les valeurs en fonction des champs rempli
   */
  buttonTurn() {
    if (this.props.score != 0) {
      const actionId = { type: "MUTATION_ID", value: this.props.id + 1 }
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `Continuer` }
      this.props.dispatch(actionBtnTurn)

      this.props.turns.push([{
        id: this.props.id,
        preneur: this.props.preneur,
        partenaire: this.props.partenaire,
        roi: this.props.roi,
        type: this.props.type,
        score: this.props.score,
        victoire: this.props.victoire,
        autreScore: this.props.autreScore,
        nbJoueur: this.props.nbJoueur,
        scoreJ1: this.props.scoreJ1,
        scoreJ2: this.props.scoreJ2,
        scoreJ3: this.props.scoreJ3,
        scoreJ4: this.props.scoreJ4,
        scoreJ5: this.props.scoreJ5,
      }])

      const actionTurn = { type: "MUTATION_TURN", value: this.props.turns }
      this.props.dispatch(actionTurn)

      const actionScore = { type: "MUTATION_SCORE", value: 0 }
      const actionType = { type: "MUTATION_TYPE", value: "" }
      const actionPreneur = { type: "MUTATION_PRENEUR", value: "" }
      const actionPartenaire = { type: "MUTATION_PARTENAIRE", value: "" }
      const actionRoi = { type: "MUTATION_ROI", value: "" }
      const actionNb = { type: "MUTATION_NBJOUEURS", value: 0 }
      this.props.dispatch(actionNb)
      this.props.dispatch(actionScore)
      this.props.dispatch(actionType)
      this.props.dispatch(actionPreneur)
      this.props.dispatch(actionPartenaire)
      this.props.dispatch(actionRoi)

      this.props.navigation.navigate("GrillChoose")

    } else if (this.props.score == 0 && this.props.type != "") {
      this.props.navigation.navigate("GrillScore")

    } else {
      const actionId = { type: "MUTATION_ID", value: this.props.id + 1 }
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `Continuer` }
      this.props.dispatch(actionBtnTurn)


      this.props.navigation.navigate("GrillChoose")
    }
  }


  /**
   * ce rendu affiche le contenant de la grill, ainsi que le bouton de navigation
   */

  render() {
    turnBefore = this.props.turns
    console.log("plop", this.props.turns)

    return (
      <View style={{
        flexDirection: 'column',
      }}>

        <InitGame />
        <ScrollView>

          <FlatList
            data={turnBefore}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <BeforeGame turnBefore={item} />}
          />
          
          <LiveGame />

          <View style={{ flex: 0.1, flexDirection:'row'}}>

            <Button block info
              style={{ flex: 1, margin: 10  }}
              onPress={() => this.buttonTurn()}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: "white"
                }}
              >
                {this.props.buttonTurnView}
              </Text>
            </Button>
            <Button danger
              style={{ flex: 0.2, margin: 10  }}
              onPress={() => Alert.alert(
                'Attention',
                "Souhaites-tu sauvegarder la partie pour la continuer plutard ou pas ?",
                [
                  {
                    text: 'Annuler',
                    onPress: () => console.log('Ask me later pressed')
                  },
                  {
                    text: 'Supprimer',
                    onPress: () => this.btnSupprimer()
                  },
                  {
                    text: 'Sauvegarder',
                    onPress: () => this.btnSauvegarder()
                  }
                ],
                { cancelable: true },
                )}
              >
              <Icon active name="exit"/>
            </Button>
          </View>
        </ScrollView>

      </View>
    )
  }
}


const mapStateToProps = state => {

  const datas = {
    pseudo : state.toogleUser.pseudo,
    pseudo2 : state.tooglePlayer.pseudo2,
    pseudo3 : state.tooglePlayer.pseudo3,
    pseudo4 : state.tooglePlayer.pseudo4,
    pseudo5 : state.tooglePlayer.pseudo5,
    turns: state.toogleScore.turns,
    buttonTurnView: state.toogleScore.buttonTurnView,
    id: state.toogleScore.id,
    preneur: state.toogleScore.preneur,
    partenaire: state.toogleScore.partenaire,
    roi: state.toogleScore.roi,
    type: state.toogleScore.type,
    score: state.toogleScore.score,
    bou: state.toogleScore.bou,
    victoire: state.toogleScore.victoire,
    preneurScore: state.toogleScore.preneurScore,
    partenaireScore: state.toogleScore.partenaireScore,
    autreScore: state.toogleScore.autreScore,
    nbJoueur: state.toogleScore.nbJoueur,
    choosePlayer: state.tooglePlayer.choosePlayer,
    verif: state.toogleUser.verif,
    scoreJ1: state.tooglePlayer.scoreJ1,
    scoreJ2: state.tooglePlayer.scoreJ2,
    scoreJ3: state.tooglePlayer.scoreJ3,
    scoreJ4: state.tooglePlayer.scoreJ4,
    scoreJ5: state.tooglePlayer.scoreJ5
  }

  return { datas, ...datas }
}

export default connect(mapStateToProps)(GameScreen)