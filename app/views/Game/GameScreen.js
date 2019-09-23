import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, Alert, Share } from "react-native";
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base';
import InitGame from "./InitGame";
import LiveGame from "./LiveGame";
import BeforeGame from "./BeforeGame";
import { BackHandler } from 'react-native'
import { CalculScore } from "../../service/CalculScore";

/**
 * Component général permet d'afficher dans le tableau des scores
 */

class GameScreen extends Component {


  /**
  * fonction qui permet avec les deux suivante de géré le retour clavier
  * ainsi que de les resultat récupéré dans le service calculScore
  */

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const res = CalculScore(this.props.datas)
    console.log("test x", res)
    actionScoreJ1 = res[0]
    actionScoreJ2 = res[1]
    actionScoreJ3 = res[2]
    actionScoreJ4 = res[3]
    actionScoreJ5 = res[4]
    console.log("test z", actionScoreJ2)

    if (actionScoreJ1 != undefined) {
      this.props.dispatch(actionScoreJ1)
      this.props.dispatch(actionScoreJ2)
      this.props.dispatch(actionScoreJ3)
      this.props.dispatch(actionScoreJ4)
      this.props.dispatch(actionScoreJ5)
    }
  }


  btnSupprimer() {
    const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: "Démarer" }
    const actionTurn = { type: "MUTATION_TURN", value: [] }
    const actionScore = { type: "MUTATION_SCORE", value: 0 }
    const actionType = { type: "MUTATION_TYPE", value: "" }
    const actionPreneur = { type: "MUTATION_PRENEUR", value: "" }
    const actionPartenaire = { type: "MUTATION_PARTENAIRE", value: "" }
    const actionRoi = { type: "MUTATION_ROI", value: "" }
    const actionScoreJ1 = { type: "MUTATION_SCORE_J1", value: "" }
    const actionScoreJ2 = { type: "MUTATION_SCORE_J2", value: "" }
    const actionScoreJ3 = { type: "MUTATION_SCORE_J3", value: "" }
    const actionScoreJ4 = { type: "MUTATION_SCORE_J4", value: "" }
    const actionScoreJ5 = { type: "MUTATION_SCORE_J5", value: "" }
    const actionNb = { type: "MUTATION_NBJOUEURS", value: 0 }
    this.props.dispatch(actionNb)
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

  async btnPartager() {
    try {
      const result = await Share.share({
        message: "Regarde les scores : " + this.props.pseudo + " a " + this.props.scoreJ1 + " points.",
        title: "Partage des scores de Gestarot :"
      }, {
          dialogTitle: "Partage :"
        });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("FriendsPlayers"); // works best when the goBack is async
    return true;
  }


  buttonTurn() {

    const token = this.props.token
    console.log("test 0", this.props.id1)
    // console.log("test 1", this.props.score)
    
    if (this.props.score != 0) {
      console.log("test if")
      fetch('https://gestarot-api.lerna.eu/api/game', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-token': token
        },
        body: JSON.stringify({
          "nb_joueurs": this.props.nbJoueur,
          "Joueur2": {
            "id": this.props.id2,
            "pseudo": this.props.pseudo2.username,
            "image": this.props.avatar2,
            "color": this.props.color2
          },
          "Joueur3": {
            "id": this.props.id3,
            "pseudo": this.props.pseudo3.username,
            "image": this.props.avatar3,
            "color": this.props.color3
          },
          "Joueur4": {
            "id": this.props.id4,
            "pseudo": this.props.pseudo4.username,
            "image": this.props.avatar4,
            "color": this.props.color4
          },
          "Joueur5": {
            "id": this.props.id5,
            "pseudo": this.props.pseudo4.username,
            "image": this.props.avatar5,
            "color": this.props.color5
          },
          "turns": this.props.turns
        }),
      }).then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == 'error') {
            console.log("YOUPIE")
            alert('Erreur de connexion, veuillez réésayer.');
          }
          else {
            console.log("ca a marcher save game", responseJson)
            return responseJson;
          }

        })
        .catch((error) => {
          console.error(error);
        });

      const actionId = { type: "MUTATION_ID", value: this.props.id + 1 }
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `Continuer` }
      this.props.dispatch(actionBtnTurn)

      this.props.turns.push({
        id: this.props.id,
        preneur: this.props.preneur,
        partenaire: this.props.partenaire,
        roi: this.props.roi,
        type: this.props.type,
        score: this.props.score,
        victoire: this.props.victoire,
        autre_score: this.props.autre_score,
        nbJoueur: this.props.nbJoueur,
        scoreJ1: this.props.scoreJ1,
        scoreJ2: this.props.scoreJ2,
        scoreJ3: this.props.scoreJ3,
        scoreJ4: this.props.scoreJ4,
        scoreJ5: this.props.scoreJ5,
      })

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
      console.log("test elseif")
      this.props.navigation.navigate("GrillScore")

    } else {
      console.log("test else")

      const actionId = { type: "MUTATION_ID", value: this.props.id + 1 }
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `Continuer` }
      this.props.dispatch(actionBtnTurn)


      this.props.navigation.navigate("GrillChoose")
    }
  }

  render() {

    turnBefore = this.props
    console.log("ploploplop 1", this.props.turns)
    console.log("ploploplop 2", this.props.turns[0])
    console.log("ploploplop 3", this.props.turns[1])

    if (this.props.turns[0] != undefined) {
      console.log("ploploplop 4", this.props.turns[0])
      turnBefore = this.props.turns
    }

    return (
      <View style={{
        flexDirection: 'column',
      }}>

        <InitGame />
        <ScrollView>

          <FlatList
            data={turnBefore}
            keyExtractor={(item) => (item.id).toString()}
            renderItem={({ item }) => <BeforeGame turnBefore={item} />}
          />

          <LiveGame />
          </ScrollView>
          <View style={{ flex: 0.1, flexDirection: 'row' }}>

            <Button block info
              style={{ flex: 1, margin: 10 }}
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
              style={{ flex: 0.2, margin: 10 }}
              onPress={() => Alert.alert(
                'Attention',
                "Souhaites-tu sauvegarder la partie pour la continuer plutard ou pas ?",
                [
                  {
                    text: 'Partager',
                    onPress: () => this.btnPartager()
                  },
                  {
                    text: 'Supprimer',
                    onPress: () => this.btnSupprimer()
                  },
                  {
                    text: 'Sauvegarder',
                    onPress: () => this.btnSupprimer()
                  }
                ],
                { cancelable: true },
              )}
            >
              <Icon active name="exit" />
            </Button>
          </View>
        

      </View>
    )
  }
}


const mapStateToProps = state => {

  const datas = {
    pseudo: state.toogleUser.pseudo,
    pseudo2: state.tooglePlayer.pseudo2,
    pseudo3: state.tooglePlayer.pseudo3,
    pseudo4: state.tooglePlayer.pseudo4,
    pseudo5: state.tooglePlayer.pseudo5,
    color2: state.tooglePlayer.color2,
    color3: state.tooglePlayer.color3,
    color4: state.tooglePlayer.color4,
    color5: state.tooglePlayer.color5,
    avatar2: state.tooglePlayer.avatar2,
    avatar3: state.tooglePlayer.avatar3,
    avatar4: state.tooglePlayer.avatar4,
    avatar5: state.tooglePlayer.avatar5,
    turns: state.toogleScore.turns,
    buttonTurnView: state.toogleScore.buttonTurnView,
    id: state.toogleScore.id,
    id1: state.toogleUser.id,
    id2: state.tooglePlayer.id2,
    id3: state.tooglePlayer.id3,
    id4: state.tooglePlayer.id4,
    id5: state.tooglePlayer.id5,
    preneur: state.toogleScore.preneur,
    partenaire: state.toogleScore.partenaire,
    roi: state.toogleScore.roi,
    type: state.toogleScore.type,
    score: state.toogleScore.score,
    bou: state.toogleScore.bou,
    victoire: state.toogleScore.victoire,
    preneurScore: state.toogleScore.preneurScore,
    partenaireScore: state.toogleScore.partenaireScore,
    autre_score: state.toogleScore.autre_score,
    nbJoueur: state.toogleScore.nbJoueur,
    choosePlayer: state.tooglePlayer.choosePlayer,
    verif: state.toogleUser.verif,
    scoreJ1: state.tooglePlayer.scoreJ1,
    scoreJ2: state.tooglePlayer.scoreJ2,
    scoreJ3: state.tooglePlayer.scoreJ3,
    scoreJ4: state.tooglePlayer.scoreJ4,
    scoreJ5: state.tooglePlayer.scoreJ5,
    token: state.toogleUser.token,

  }

  return { datas, ...datas }
}

export default connect(mapStateToProps)(GameScreen)