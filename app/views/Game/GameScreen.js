import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from 'react-redux'
import { Button } from 'native-base';
import InitGame from "./InitGame";
import LiveGame from "./LiveGame";
import BeforeGame from "./BeforeGame";
import { BackHandler } from 'react-native'
import { CalculScore } from "../../service/CalculScore";
import { CalculScoreIndividuel } from "../../service/CalculScoreInviduel";

class GameScreen extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    const res = CalculScore(this.props.datas)
    res.forEach(item => this.props.dispatch(item))

    const resC = CalculScoreIndividuel(this.props.datas)
    resC.forEach(item => this.props.dispatch(item))

  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

    
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FriendsPlayers"); // works best when the goBack is async
    return true;
  }

  buttonTurn() {
    if (this.props.score != 0) {
      const actionId = { type: "MUTATION_ID", value: this.props.id + 1 }
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `tour n°${this.props.id + 1}` }
      this.props.dispatch(actionBtnTurn)

      this.props.turns.push([{
        id: this.props.id,
        preneur: this.props.preneur,
        roi: this.props.roi,
        type: this.props.type,
        score: this.props.score,
        victoire: this.props.victoire,
        preneurScore: this.props.preneurScore,
        partenaireScore: this.props.partenaireScore,
        autreScore: this.props.autreScore,
        nbJoueur: this.props.nbJoueur,
      }])

      const actionTurn = { type: "MUTATION_TURN", value: this.props.turns }
      this.props.dispatch(actionTurn)

      const actionScore = { type: "MUTATION_SCORE", value: 0 }
      const actionType = { type: "MUTATION_TYPE", value: "" }
      const actionPreneur = { type: "MUTATION_PRENEUR", value: "" }
      const actionPartenaire = { type: "MUTATION_PARTENAIRE", value: "" }
      const actionRoi = { type: "MUTATION_ROI", value: "" }

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

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `tour n°${this.props.id + 1}` }
      this.props.dispatch(actionBtnTurn)


      this.props.navigation.navigate("GrillChoose")
    }
  }



  render() {
    turnBefore = this.props.turns
    console.log("plop", this.props.turns)

    return (
      <View style={{
        flexDirection: 'column',
      }}>


        <InitGame />

        <FlatList
          data={turnBefore}
           keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BeforeGame turnBefore={item} />}
        />
        <LiveGame />

        <View style={{ flex: 0.1, margin: 20 }}>

          <Button block info
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
        </View>
      </View>
    )
  }
}


const mapStateToProps = state => {

  const datas = {
    turns: state.toogleScore.turns,
    buttonTurnView: state.toogleScore.buttonTurnView,
    id: state.toogleScore.id,
    preneur: state.toogleScore.preneur,
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
    scoreJ1 : state.tooglePlayer.scoreJ1,
    scoreJ2 : state.tooglePlayer.scoreJ2,
    scoreJ3 : state.tooglePlayer.scoreJ3,
    scoreJ4 : state.tooglePlayer.scoreJ4,
    scoreJ5 : state.tooglePlayer.scoreJ5
  }

  return { datas, ...datas }
}

export default connect(mapStateToProps)(GameScreen)