import React, {Component} from "react";
import { View, Text} from 'react-native';
import { Button } from 'native-base';

export default class GameScreen extends Component {

  constructor()
  {
    super();
    
    this.state = {
      items : [],
      turns : {
        id : [],
        preneur : [],
        roi: [],
        type : [],  
        score : [],    
      },
      preneur : "",
      roi: "",
      type : "",
      score: "",
      id:0,
      buttonTurnView : "Commencer une nouvelle partie",
      alertDialogue : <View></View>,
      dialogVisible: false
    };
  }

  buttonTurn(){
    this.state.id = this.state.id+1
    this.state.buttonTurnView = `tour n°${this.state.id}`
    this.setState(this.state);
    this.props.navigation.navigate("GrillChoose",{
      nbJoueur:this.state.items.length,
      idTurn:this.state.id
    })

    // this.state.buttonTurnView = 1
    // this.setState(this.state);
    // console.log(this.state.turns.type.length, this.state.turns.score.length)
    
    // if(this.state.turns.type.length != this.state.turns.score.length){
    //   this.state.dialogVisible = true
    //   this.setState(this.state);

    // }
    // else if(
    //   this.state.preneur != "" &&
    //   this.state.roi != "" &&
    //   this.state.type != ""
    // ){
    //   this.state.turns.id.push(this.state.buttonTurnView)
    //   this.state.turns.preneur.push(this.state.preneur)
    //   this.state.turns.roi.push(this.state.roi)
    //   this.state.turns.type.push(this.state.type)

    //   this.state.preneur = ""
    //   this.state.roi = ""
    //   this.state.type = ""
    //   this.setState(this.state);
    // }
    // this.setState(this.state);
  }

  componentDidMount(){
    console.log("Bientot au bout", this.state.preneur)

  }



  render(){
    console.log(this.props);

    if ( this.state.items.length == 0 ) {
      const nbJoueurChoose = this.props.navigation.getParam("nbJoueur");
      const state = this.state;
  
      for(let i = 1; i <= nbJoueurChoose; i++){
        this.state.items.push(`Joueur ${i}`)
      }
    }

    if(this.state.items.length>3){
      joueurFour = <Button bordered light 
                      onPress={() => this.props.navigation.navigate("Stat")}
                      style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} 
                  >
                      <View style={{width:"100%", alignItems:"center"}}>
                          <Text style={{
                              textAlign: 'center', 
                              color:"white"}}
                          >
                              { this.state.items[3] }
                          </Text>
                      </View>
                  </Button>
  } else {
      joueurFour = <View></View>
  }
  if(this.state.items.length>4){
      joueurFive =    <Button bordered light 
                          onPress={() => this.props.navigation.navigate("Stat")}
                          style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} 
                      >
                          <View style={{width:"100%", alignItems:"center"}}>
                              <Text style={{
                                  textAlign: 'center', 
                                  color:"white"}}
                              >
                                  { this.state.items[4] }
                              </Text>
                          </View>
                      </Button>
  } else {
      joueurFive = <View></View>
  }

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
            <Text style={{color:"white"}}>Info</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.state.items[0] }</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.state.items[1] }</Text>
          </View>
        </Button>
        <Button bordered light 
        onPress={() => this.props.navigation.navigate("Stat")}
        style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
          <View style={{width:"100%", alignItems:"center"}}>
          <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.state.items[2] }</Text>
          </View>
        </Button>
        {joueurFour}
        {joueurFive}
        </View>
        
        
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
            { this.state.buttonTurnView == 0 ? "Démarrer la partie" : this.state.buttonTurnView }
            </Text>
          </Button>
        </View>
       </View>
      )
    }
  }

  

  const styles = {
    container: { flex: 1, padding: 16, paddingTop: 30},
    head: { height: 40, backgroundColor: 'rgba(52, 52, 52, 0.6)' },
    text: { margin: 6},
    container2: {
    flex: 0.5,
    marginTop: 200, 
    color: '#ffffff',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  }
}