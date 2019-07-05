import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from 'react-redux'
import { Button } from 'native-base';
import InitGame from "./InitGame";
import LiveGame from "./LiveGame";
import BeforeGame from "./BeforeGame";

class GameScreen extends Component {

  // handleBackPress = () => {
  //   this.props.navigation.navigate("Choose"); // works best when the goBack is async
  //   return true;
  // }

  componentDidMount(){
    if(this.props.choosePlayer != 0){
      console.log("test",this.props.choosePlayer)
      this.props.navigation.navigate("FriendsPlayers")
    }
  }

  buttonTurn(){
    console.log("buttonturn", this.props)
    if(this.props.score != 0){
      this.props.turns.push([{
        id : this.props.id,
        preneur : this.props.preneur,
        roi: this.props.roi,
        type : this.props.type,  
        score : this.props.score,   
        victoire :this.props.victoire,
        preneurScore : this.props.preneurScore,
        partenaireScore : this.props.partenaireScore,
        autreScore : this.props.autreScore,
        nbJoueur : this.props.nbJoueur
      }])

      console.log("buttonturn turns:", this.props.turns)

      const actionTurn = { type: "MUTATION_TURN", value: this.props.turns }

      this.props.dispatch(actionTurn)

      const actionScore = { type: "MUTATION_SCORE", value: 0 }
      const actionType = { type: "MUTATION_TYPE", value: ""}
      const actionPreneur = {type: "MUTATION_PRENEUR", value: ""}
      const actionPartenaire = {type: "MUTATION_PARTENAIRE", value: ""}
      const actionRoi = {type: "MUTATION_ROI", value: ""}

      this.props.dispatch(actionScore)
      this.props.dispatch(actionType) 
      this.props.dispatch(actionPreneur)
      this.props.dispatch(actionPartenaire)
      this.props.dispatch(actionRoi)

      this.props.navigation.navigate("GrillScore")

      const actionId = { type: "MUTATION_ID", value: this.props.id + 1}
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `tour n°${this.props.id + 1}`}
      this.props.dispatch(actionBtnTurn)

  
      this.props.navigation.navigate("GrillChoose")
    }

    if(this.props.score == 0 && this.props.type != ""){
        this.props.navigation.navigate("GrillScore")

    }else{
      const actionId = { type: "MUTATION_ID", value: this.props.id + 1}
      this.props.dispatch(actionId)

      const actionBtnTurn = { type: "MUTATION_BUTTONTURN", value: `tour n°${this.props.id + 1}`}
      this.props.dispatch(actionBtnTurn)

  
      this.props.navigation.navigate("GrillChoose")
    }
  }



  render(){
    turnBefore = this.props.turns
    console.log("plop",this.props.turns)

    return (
      <View style={{
        flexDirection: 'column',
      }}>


        <InitGame/>

        <FlatList
          data={turnBefore}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <BeforeGame turnBefore={item}/>}
        />
        <LiveGame/> 
         
        <View style={{flex:0.1, margin:20}}>

          <Button block info 
            onPress={() => this.buttonTurn()}
          >
            <Text 
              style={{
                textAlign: 'center', 
                color:"white"
              }}
            >
            { this.props.buttonTurnView }
            </Text>
          </Button>
        </View>
       </View>
      )
    }
  }

  
const mapStateToProps = state => {
    return {
      turns : state.toogleScore.turns,
      buttonTurnView : state.toogleScore.buttonTurnView,
      id : state.toogleScore.id,
      preneur : state.toogleScore.preneur,
      roi : state.toogleScore.roi,
      type : state.toogleScore.type,
      score : state.toogleScore.score,
      victoire : state.toogleScore.victoire,
      preneurScore : state.toogleScore.preneurScore,
      partenaireScore : state.toogleScore.partenaireScore,
      autreScore : state.toogleScore.autreScore,
      nbJoueur : state.toogleScore.nbJoueur,
      choosePlayer : state.tooglePlayer.choosePlayer
    }
}

export default connect(mapStateToProps)(GameScreen)