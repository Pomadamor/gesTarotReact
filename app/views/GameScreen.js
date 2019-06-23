import React, {Component} from "react";
import { View, Text} from 'react-native';
import { Button } from 'native-base';
import SlidingUpPanel from 'rn-sliding-up-panel';

export default class GameScreen extends Component {

  constructor()
  {
    super();
    

    this.state = {
      items : [],
      redOuPas : "red",
      preneur : ""
    };
  }

    buttonTurnView = 0
    // idTurn = 0
    
    // type = []
    // roi = []
    // partenaire = []


  buttonTurn(){
    // if(this.buttonTurnView === 0){
    //   this.buttonTurnView = 1
      this._panel.show()
    // }
    // else if(this.buttonTurnView === 1){
    //   this.buttonTurnView = 0 
    // }
  }

  buttonPartenaire0(){
    if(this.state.redOuPas = 'red'){
      this.state.redOuPas = '#979797'
      this.preneur = "Joueur 1"
    }else{
      this.state.redOuPas = 'red'
      this.preneur = ""
    }
    this.setState(this.state);
  }
  buttonPartenaire1(){
    if(this.state.redOuPas = 'red'){
      this.state.redOuPas = '#979797'
      this.preneur = "Joueur 2"
    }else{
      this.state.redOuPas = 'red'
      this.preneur = ""
    }
    this.setState(this.state);
  }
  buttonPartenaire2(){
    if(this.state.redOuPas = 'red'){
      this.state.redOuPas = '#979797'
      this.preneur = "Joueur 3"
    }else{
      this.state.redOuPas = 'red'
      this.preneur = ""
    }
    this.setState(this.state);
  }
  buttonPartenaire3(){
    if(this.state.redOuPas = 'red'){
      this.state.redOuPas = '#979797'
      this.preneur = "Joueur 4"
    }else{
      this.state.redOuPas = 'red'
      this.preneur = ""
    }
    this.setState(this.state);
  }
  buttonPartenaire4(){
    if(this.state.redOuPas = 'red'){
      this.state.redOuPas = '#979797'
      this.preneur = "Joueur 5"
    }else{
      this.state.redOuPas = 'red'
      this.preneur = ""
    }
    this.setState(this.state);
  }

  buttonKingCoeur(){

  }
  buttonKingTrefle(){

  }
  buttonKingPique(){

  }
  buttonKingCarreau(){

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
                  style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
                    <View style={{width:"100%", alignItems:"center"}}>
                    <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.state.items[3] }</Text>
                    </View>
                  </Button>
    } else {joueurFour = <View></View>}
    if(this.state.items.length>4){
    joueurFive =  <Button bordered light 
                  onPress={() => this.props.navigation.navigate("Stat")}
                  style={{flex:1, height:60, margin:1, backgroundColor:'rgba(52, 52, 52, 0.6)'}} >
                    <View style={{width:"100%", alignItems:"center"}}>
                    <Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{ this.state.items[4] }</Text>
                    </View>
                  </Button>
    } else {joueurFive = <View></View>}

    if(this.state.items.length>3){
    joueurFourAlert= <Button bordered light
                      backgroundColor={this.state.redOuPas}
                      style={{flex:1, margin:2}}
                      onPress={() => this.buttonPartenaire3()}>
                        <View style={{width:"100%", alignItems:"center"}}>
                          <Text>{ this.state.items[3] }</Text>
                        </View>
                      </Button>
    } else {joueurFourAlert= <View></View>}

    if(this.state.items.length>4){
    joueurFiveAlert = <Button bordered light
                       backgroundColor={this.state.redOuPas}
                       style={{flex:1, margin:2}}
                       onPress={() => this.buttonPartenaire4()}>
                        <View style={{width:"100%", alignItems:"center"}}>
                          <Text>{ this.state.items[4] }</Text>
                        </View> 
                      </Button>
    } else {joueurFiveAlert = <View></View>}

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
          <Button block info onPress={() => this.buttonTurn()}><Text style={{
                    textAlign: 'center', 
                    color:"white"}}>{this.buttonTurnView}</Text></Button>
        </View>
         <SlidingUpPanel ref={c => this._panel = c}>
           <View style={styles.container2}>
               <Text>Qui ?</Text>
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Button
               backgroundColor={this.state.redOuPas}
               style={{flex:1, margin:2}}
               onPress={() => this.buttonPartenaire0()}>
                <View style={{width:"100%", alignItems:"center"}}>
                  <Text>{ this.state.items[0] }</Text>
                </View>
                </Button> 


                <Button bordered light
                backgroundColor={this.state.redOuPas}
                style={{flex:1, margin:2}}
                onPress={() => this.buttonPartenaire1()}>
                 <View style={{width:"100%", alignItems:"center"}}>
                  <Text>{ this.state.items[1] }</Text>
                </View>
                </Button>

                <Button bordered light
                backgroundColor={this.state.redOuPas}
                style={{flex:1, margin:2}}
                onPress={() => this.buttonPartenaire2()}>
                  <View style={{width:"100%", alignItems:"center"}}>
                    <Text>{ this.state.items[2] }</Text>
                  </View>
                </Button>

                {joueurFourAlert}
                {joueurFiveAlert}

               </View>
               <Text>Quelle roi (si 5 joueur) ?</Text>
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Button bordered light
               style={{flex:1, margin:2}}
               onPress={() => this.buttonKingCoeur()}>
                <View style={{width:"100%", alignItems:"center"}}>
                  <Text>Coeur</Text>
                </View>
                </Button> 

                <Button bordered light
                style={{flex:1, margin:2}}
                onPress={() => this.buttonKingTrefle()}>
                 <View style={{width:"100%", alignItems:"center"}}>
                  <Text>Trêfle</Text>
                </View>
                </Button>

                <Button bordered light
                style={{flex:1, margin:2}}
                onPress={() => this.buttonKingCarreau()}>
                  <View style={{width:"100%", alignItems:"center"}}>
                    <Text>Carreau</Text>
                  </View>
                </Button>

                <Button bordered light
                style={{flex:1, margin:2}}
                onPress={() => this.buttonKingPique()}>
                  <View style={{width:"100%", alignItems:"center"}}>
                    <Text>Pique</Text>
                  </View>
                </Button>

               </View>
               <Text>Quelles types de prise ?</Text>
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Button bordered light
               style={{flex:1, margin:2}}>
                <View style={{width:"100%", alignItems:"center"}}>
                  <Text>Petite</Text>
                </View>
                </Button> 

                <Button bordered light
                style={{flex:1, margin:2}}>
                 <View style={{width:"100%", alignItems:"center"}}>
                  <Text>Garde</Text>
                </View>
                </Button>

                <Button bordered light
                style={{flex:1, margin:2}}>
                  <View style={{width:"100%", alignItems:"center"}}>
                    <Text>G-Sans</Text>
                  </View>
                </Button>

                <Button bordered light
                style={{flex:1, margin:2}}>
                  <View style={{width:"100%", alignItems:"center"}}>
                    <Text>G-Contre</Text>
                  </View>
                </Button>

               </View>
           </View>
         </SlidingUpPanel>
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