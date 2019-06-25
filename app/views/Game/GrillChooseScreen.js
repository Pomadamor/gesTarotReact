import React, {Component} from "react";
import { View, Text, Alert} from 'react-native';
import { Button } from 'native-base';

export default class GrillChooseScreen extends Component {

    constructor()
    {
      super();
      
      this.state = {
        items : [],    
      };

    }

    buttonValiderGrill(){
        console.log(this.state.roi)
        if(this.state.items.length>4 && this.state.roi == undefined ){
            alert('Veuillez faire un choix pour chacune des catégories');
        }

        else if(
              this.state.preneur == undefined ||
              this.state.type == undefined
        ){
            alert('Veuillez faire un choix pour chacune des catégories');
        }
        else{
            id = this.props.navigation.getParam("idTurn")
            this.setState(this.state);
            this.props.navigation.navigate("Game",{
                combien:this.state.items.length,
                nbJoueur:this.state.preneur,
                avecQui:this.state.roi,
                quoi:this.state.type,
                quand:this.state.id
            })
            console.log("test")
        }
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
        if(this.state.roi != "Coeur"){
            this.state.roi = "Coeur"
            this.setState(this.state);
            console.log(this.state.items.length)
        }
    }
    buttonKingTrefle(){
        if(this.state.roi != "Trefle"){
            this.state.roi = "Trefle"
            this.setState(this.state);
        }
    }
    buttonKingPique(){
        if(this.state.roi != "Pique"){
            this.state.roi = "Pique"
            this.setState(this.state);
        }
    }
    buttonKingCarreau(){
        if(this.state.roi != "Carreau"){
            this.state.roi = "Carreau"
            this.setState(this.state);
        }
    }

    buttonTypeP(){
        if(this.state.type != "Petite"){
            this.state.type = "Petite"
            this.setState(this.state);
        }
    }
    buttonTypeG(){
        if(this.state.type != "Garde"){
            this.state.type = "Garde"
            this.setState(this.state);
        }
    }
    buttonTypeGS(){
        if(this.state.type != "G-Sans"){
            this.state.type = "G-Sans"
            this.setState(this.state);
        }
    }
    buttonTypeGC(){
        if(this.state.type != "G-Contre"){
            this.state.type = "G-Contre"
            this.setState(this.state);
        }
    }

    render(){
        if ( this.state.items.length == 0 ) {
            const nbJoueurChoose = this.props.navigation.getParam("nbJoueur");
            const state = this.state;
            for(let i = 1; i <= nbJoueurChoose; i++){
              this.state.items.push(`Joueur ${i}`)
            }
        }

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
        backgroundColor={ this.state.preneur == 'Joueur 5' ? "steelblue" : null }
        style={{flex:1, margin:2}}
                            onPress={() => this.buttonPartenaire4()}>
                            <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{ this.state.items[4] }</Text>
                            </View> 
                            </Button>
        } else {joueurFiveAlert = <View></View>}
        

            titleKingChoose = <Text style={{color:"white", fontSize:20}}>Avec qui ?</Text>
            kingChoose = <View style={{flex: 1, flexDirection: 'row'}}>
            <Button bordered light
            backgroundColor={ this.state.roi == 'Coeur' ? "steelblue" : null }
            style={{flex:1, margin:2}}
            onPress={() => this.buttonKingCoeur()}>
             <View style={{width:"100%", alignItems:"center"}}>
             <Text style={{color:"white"}}> Coeur</Text>
             </View>
             </Button> 
        
             <Button bordered light
              backgroundColor={ this.state.roi == 'Trefle' ? "steelblue" : null }
              style={{flex:1, margin:2}}
              onPress={() => this.buttonKingTrefle()}>
              <View style={{width:"100%", alignItems:"center"}}>
              <Text style={{color:"white"}}> Trêfle</Text>
             </View>
             </Button>
        
             <Button bordered light
              backgroundColor={ this.state.roi == 'Carreau' ? "steelblue" : null }
              style={{flex:1, margin:2}}
              onPress={() => this.buttonKingCarreau()}>
               <View style={{width:"100%", alignItems:"center"}}>
               <Text style={{color:"white"}}> Carreau</Text>
               </View>
             </Button>
        
             <Button bordered light
             style={{flex:1, margin:2}}
             backgroundColor={ this.state.roi == 'Pique' ? "steelblue" : null }
             onPress={() => this.buttonKingPique()}>
               <View style={{width:"100%", alignItems:"center"}}>
               <Text style={{color:"white"}}> Pique</Text>
               </View>
             </Button>
        
            </View>
        

        return (
            <View style={styles.container2}>
                <Text style={{color:"white", fontSize:20}}>Qui ?</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button bordered light
                        backgroundColor={ this.state.preneur == 'Joueur 1' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonPartenaire0()}
                    >
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
                        onPress={() => this.buttonPartenaire2()}
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{ this.state.items[2] }</Text>
                        </View>
                    </Button>

                    {joueurFourAlert}
                    {joueurFiveAlert}

                </View>
             
                { this.state.items.length > 4  ? titleKingChoose : null }
                { this.state.items.length > 4  ? kingChoose : null }

                <Text style={{color:"white", fontSize:20}}>Quoi ?</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button bordered light
                        backgroundColor={ this.state.type == 'Petite' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeP()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> Petite</Text>
                        </View>
                    </Button> 

                    <Button bordered light
                        backgroundColor={ this.state.type == 'Garde' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeG()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> Garde</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.state.type == 'G-Sans' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeGS()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> G-Sans</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.state.type == 'G-Contre' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeGC()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> G-Contre</Text>
                        </View>
                    </Button>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button block info 
                        onPress={() => this.buttonValiderGrill()}
                    >
                        <Text 
                        style={{
                            textAlign: 'center', 
                            color:"white",
                            width: "80%"
                        }}
                        >
                            Valider
                        </Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    container2: {
    flex: 1,
    marginTop: 50, 
    marginBottom: 50,
    paddingTop:50,
    paddingBottom:30,
    color: '#ffffff',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    alignItems: 'center',
    justifyContent: 'center'
  }
}