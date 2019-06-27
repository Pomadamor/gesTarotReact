import React, {Component} from "react";
import { View, Text, Alert} from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux'

class GrillChooseScreen extends Component {

    buttonValiderGrill(){
        if(this.props.nbJoueur>4 && this.props.roi == "" ){
            alert('Veuillez faire un choix pour chacune des catégories');
        }

        else if(
              this.props.preneur == ""||
              this.props.type == ""
        ){
            alert('Veuillez faire un choix pour chacune des catégories');
        }
        else{
            this.props.navigation.navigate("Game")
        }
    }

    buttonPartenaire0(){
        if(this.props.preneur != "Joueur 1"){
            const actionPreneur1 = { type: "MUTATION_PRENEUR", value: "Joueur 1"}
            this.props.dispatch(actionPreneur1)
        }
    }
    buttonPartenaire1(){
        if(this.props.preneur != "Joueur 2"){
            const actionPreneur2 = { type: "MUTATION_PRENEUR", value: "Joueur 2"}
            this.props.dispatch(actionPreneur2)
        }
    }
    buttonPartenaire2(){
        if(this.props.preneur != "Joueur 3"){
            const actionPreneur3 = { type: "MUTATION_PRENEUR", value: "Joueur 3"}
            this.props.dispatch(actionPreneur3)
        }
    }
    buttonPartenaire3(){
        if(this.props.preneur != "Joueur 4"){
            const actionPreneur4 = { type: "MUTATION_PRENEUR", value: "Joueur 4"}
            this.props.dispatch(actionPreneur4)
        }
    }
    buttonPartenaire4(){
        if(this.props.preneur != "Joueur 5"){
            const actionPreneur5 = { type: "MUTATION_PRENEUR", value: "Joueur 5"}
            this.props.dispatch(actionPreneur5)
        }
    }

    buttonKingCoeur(){
        if(this.props.roi != "Coeur"){
            const actionCoeur = { type: "MUTATION_ROI", value: "Coeur"}
            this.props.dispatch(actionCoeur)
        }
    }
    buttonKingTrefle(){
        if(this.props.roi != "Trefle"){
            const actionTrefle = { type: "MUTATION_ROI", value: "Trefle"}
            this.props.dispatch(actionTrefle)
        }
    }
    buttonKingPique(){
        if(this.props.roi != "Pique"){
            const actionPique = { type: "MUTATION_ROI", value: "Pique"}
            this.props.dispatch(actionPique)
        }
    }
    buttonKingCarreau(){
        if(this.props.roi != "Carreau"){
            const actionCarreau = { type: "MUTATION_ROI", value: "Carreau"}
            this.props.dispatch(actionCarreau)
        }
    }

    buttonTypeP(){
        if(this.props.type != "Petite"){
            const actionPetite = { type: "MUTATION_TYPE", value: "Petite"}
            this.props.dispatch(actionPetite)
        }
    }
    buttonTypeG(){
        if(this.props.type != "Garde"){
            const actionGarde = { type: "MUTATION_TYPE", value: "Garde"}
            this.props.dispatch(actionGarde)
        }
    }
    buttonTypeGS(){
        if(this.props.type != "G-Sans"){
            const actionGS = { type: "MUTATION_TYPE", value: "G-Sans"}
            this.props.dispatch(actionGS)
        }
    }
    buttonTypeGC(){
        if(this.props.type != "G-Contre"){
            const actionGC = { type: "MUTATION_TYPE", value: "G-Contre"}
            this.props.dispatch(actionGC)
        }
    }

    render(){
        if(this.props.nbJoueur>3){
            joueurFourAlert= <Button bordered light
            backgroundColor={ this.props.preneur == 'Joueur 4' ? "steelblue" : null }
            style={{flex:1, margin:2}}
                              onPress={() => this.buttonPartenaire3()}>
                                <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>Joueur 4</Text>
                                </View>
                              </Button>
        } else {joueurFourAlert= <View></View>}
    
        if(this.props.nbJoueur>4){
        joueurFiveAlert = <Button bordered light
        backgroundColor={ this.props.preneur == 'Joueur 5' ? "steelblue" : null }
        style={{flex:1, margin:2}}
                            onPress={() => this.buttonPartenaire4()}>
                            <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>Joueur 5</Text>
                            </View> 
                            </Button>
        } else {joueurFiveAlert = <View></View>}
        

            titleKingChoose = <Text style={{color:"white", fontSize:20}}>Avec qui ?</Text>
            kingChoose = <View style={{flex: 1, flexDirection: 'row'}}>
            <Button bordered light
            backgroundColor={ this.props.roi == 'Coeur' ? "steelblue" : null }
            style={{flex:1, margin:2}}
            onPress={() => this.buttonKingCoeur()}>
             <View style={{width:"100%", alignItems:"center"}}>
             <Text style={{color:"white"}}> Coeur</Text>
             </View>
             </Button> 
        
             <Button bordered light
              backgroundColor={ this.props.roi == 'Trefle' ? "steelblue" : null }
              style={{flex:1, margin:2}}
              onPress={() => this.buttonKingTrefle()}>
              <View style={{width:"100%", alignItems:"center"}}>
              <Text style={{color:"white"}}> Trêfle</Text>
             </View>
             </Button>
        
             <Button bordered light
              backgroundColor={ this.props.roi == 'Carreau' ? "steelblue" : null }
              style={{flex:1, margin:2}}
              onPress={() => this.buttonKingCarreau()}>
               <View style={{width:"100%", alignItems:"center"}}>
               <Text style={{color:"white"}}> Carreau</Text>
               </View>
             </Button>
        
             <Button bordered light
             style={{flex:1, margin:2}}
             backgroundColor={ this.props.roi == 'Pique' ? "steelblue" : null }
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
                        backgroundColor={ this.props.preneur == 'Joueur 1' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonPartenaire0()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>Joueur 1</Text>
                        </View>
                    </Button> 


                    <Button bordered light
                        backgroundColor={ this.props.preneur == 'Joueur 2' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonPartenaire1()}>
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>Joueur 2</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.props.preneur == 'Joueur 3' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonPartenaire2()}
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>Joueur 3</Text>
                        </View>
                    </Button>

                    {joueurFourAlert}
                    {joueurFiveAlert}

                </View>
             
                { this.props.nbJoueur > 4  ? titleKingChoose : null }
                { this.props.nbJoueur > 4  ? kingChoose : null }

                <Text style={{color:"white", fontSize:20}}>Quoi ?</Text>

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button bordered light
                        backgroundColor={ this.props.type == 'Petite' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeP()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> Petite</Text>
                        </View>
                    </Button> 

                    <Button bordered light
                        backgroundColor={ this.props.type == 'Garde' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeG()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> Garde</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.props.type == 'G-Sans' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeGS()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> G-Sans</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.props.type == 'G-Contre' ? "steelblue" : null }
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

const mappropsToProps = (props) => {
    return props
  }
  
  export default connect(mappropsToProps)(GrillChooseScreen);