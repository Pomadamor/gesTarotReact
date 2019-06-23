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
      preneur : "",
      roi: "",
      type : ""
    };
  }

    buttonTurnView = 0
    // idTurn = 0
    
    // type = []
    // roi = []
    // partenaire = []


  buttonTurn(){
      this._panel.show()
  }

  buttonPartenaire0(){
    if(this.state.preneur != "Joueur 1"){
      this.state.preneur = "Joueur 1"
      this.setState(this.state);
    }
  }
  buttonPartenaire1(){
    if(this.state.preneur != "Joueur 2"){
      this.state.preneur = "Joueur 2"
      this.setState(this.state);
    }
  }
  buttonPartenaire2(){
    if(this.state.preneur != "Joueur 3"){
      this.state.preneur = "Joueur 3"
      this.setState(this.state);
    }
  }
  buttonPartenaire3(){
    if(this.state.preneur != "Joueur 4"){
      this.state.preneur = "Joueur 4"
      this.setState(this.state);
    }
  }
  buttonPartenaire4(){
    if(this.state.preneur != "Joueur 5"){
      this.state.preneur = "Joueur 5"
      this.setState(this.state);
    }
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
    backgroundColor={ this.state.preneur == 'Joueur 4' ? "steelblue" : null }
    style={{flex:1, margin:2}}
                      onPress={() => this.buttonPartenaire3()}>
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text style={{color:"white"}}> { this.state.items[3] }</Text>
                        </View>
                      </Button>
    } else {joueurFourAlert= <View></View>}

    if(this.state.items.length>4){
    joueurFiveAlert = <Button bordered light
    backgroundColor={ this.state.preneur == 'Joueur 5' ? "red" : null }
    style={{flex:1, margin:2}}
                       onPress={() => this.buttonPartenaire4()}>
                        <View style={{width:"100%", alignItems:"center"}}>
                        <Text style={{color:"white"}}>{ this.state.items[4] }</Text>
                        </View> 
                      </Button>
    } else {joueurFiveAlert = <View></View>}

    titleKingChoose = <Text>Quelle roi (si 5 joueur) ?</Text>
    kingChoose = <View style={{flex: 1, flexDirection: 'row'}}>
    <Button bordered light
    style={{flex:1, margin:2}}
    onPress={() => this.buttonKingCoeur()}>
     <View style={{width:"100%", alignItems:"center"}}>
     <Text style={{color:"white"}}> Coeur</Text>
     </View>
     </Button> 

     <Button bordered light
     style={{flex:1, margin:2}}
     onPress={() => this.buttonKingTrefle()}>
      <View style={{width:"100%", alignItems:"center"}}>
      <Text style={{color:"white"}}> Trêfle</Text>
     </View>
     </Button>

     <Button bordered light
     style={{flex:1, margin:2}}
     onPress={() => this.buttonKingCarreau()}>
       <View style={{width:"100%", alignItems:"center"}}>
       <Text style={{color:"white"}}> Carreau</Text>
       </View>
     </Button>

     <Button bordered light
     style={{flex:1, margin:2}}
     onPress={() => this.buttonKingPique()}>
       <View style={{width:"100%", alignItems:"center"}}>
       <Text style={{color:"white"}}> Pique</Text>
       </View>
     </Button>

    </View>

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
               <Text style={{color:"white"}}>Qui ?</Text>
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Button bordered light
               backgroundColor={ this.state.preneur == 'Joueur 1' ? "steelblue" : null }
               style={{flex:1, margin:2}}
               onPress={() => this.buttonPartenaire0()}>
                <View style={{width:"100%", alignItems:"center"}}>
                  <Text style={{color:"white"}}>{ this.state.items[0] }</Text>
                </View>
                </Button> 


                <Button bordered light
               backgroundColor={ this.state.preneur == 'Joueur 2' ? "steelblue" : null }
               style={{flex:1, margin:2}}
                onPress={() => this.buttonPartenaire1()}>
                 <View style={{width:"100%", alignItems:"center"}}>
                 <Text style={{color:"white"}}>{ this.state.items[1] }</Text>
                </View>
                </Button>

                <Button bordered light
               backgroundColor={ this.state.preneur == 'Joueur 3' ? "steelblue" : null }
               style={{flex:1, margin:2}}
                onPress={() => this.buttonPartenaire2()}>
                  <View style={{width:"100%", alignItems:"center"}}>
                  <Text style={{color:"white"}}>{ this.state.items[2] }</Text>
                  </View>
                </Button>

                {joueurFourAlert}
                {joueurFiveAlert}

               </View>
               
               { this.state.items.length > 4  ? titleKingChoose : null }
               { this.state.items.length > 4  ? kingChoose : null }

               
               <Text>Quelles types de prise ?</Text>
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Button bordered light
               style={{flex:1, margin:2}}>
                <View style={{width:"100%", alignItems:"center"}}>
                <Text style={{color:"white"}}> Petite</Text>
                </View>
                </Button> 

                <Button bordered light
                style={{flex:1, margin:2}}>
                 <View style={{width:"100%", alignItems:"center"}}>
                 <Text style={{color:"white"}}> Garde</Text>
                </View>
                </Button>

                <Button bordered light
                style={{flex:1, margin:2}}>
                  <View style={{width:"100%", alignItems:"center"}}>
                  <Text style={{color:"white"}}> G-Sans</Text>
                  </View>
                </Button>

                <Button bordered light
                style={{flex:1, margin:2}}>
                  <View style={{width:"100%", alignItems:"center"}}>
                  <Text style={{color:"white"}}> G-Contre</Text>
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