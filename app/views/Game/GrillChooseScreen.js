import React, {Component} from "react";
import { View, Text} from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'

/**
 * Component général permet d'afficher la grille de choix du type de prise, avec qui, etc.
 */

class GrillChooseScreen extends Component {


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    
    /**
     * Fonction handleBackPress permet d'empecher le retour arrière depuis le clavier
     */
      handleBackPress = () => {
        alert('Veuillez renseigner tout les champs pour pouvoir continuer.')
        return true;
      }

    /**
     * Fonction buttonValiderGrill permet de valider les choix fait
     */
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

    /**
     * Fonction buttonPreneur permet de definir le preneur.
     *
     * @param {int} nb
     * 
     */

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

    /**
     * Fonction buttonKingCoeur permet de définir le roi appelé par coeur.
     * @param {string} Coeur
     */


    buttonKingCoeur(){
        if(this.props.roi != "Coeur"){
            const actionCoeur = { type: "MUTATION_ROI", value: "Coeur"}
            this.props.dispatch(actionCoeur)
        }
    }

    /**
     * Fonction buttonKingTrefle permet de définir le roi appelé par trefle.
     * @param {string} Trefle
     */
    buttonKingTrefle(){
        if(this.props.roi != "Trefle"){
            const actionTrefle = { type: "MUTATION_ROI", value: "Trefle"}
            this.props.dispatch(actionTrefle)
        }
    }

    /**
     * Fonction buttonKingPique permet de définir le roi appelé par pique.
     * @param {string} Pique
     */
    buttonKingPique(){
        if(this.props.roi != "Pique"){
            const actionPique = { type: "MUTATION_ROI", value: "Pique"}
            this.props.dispatch(actionPique)
        }
    }

    /**
     * Fonction buttonKingCarreau permet de définir le roi appelé par carreau.
     * @param {string} Carreau
     */
    buttonKingCarreau(){
        if(this.props.roi != "Carreau"){
            const actionCarreau = { type: "MUTATION_ROI", value: "Carreau"}
            this.props.dispatch(actionCarreau)
        }
    }

    /**
     * Fonction buttonTypeP permet de définir le type de prise par petite.
     * @param {string} petite
     */
    buttonTypeP(){
        if(this.props.type != "Petite"){
            const actionPetite = { type: "MUTATION_TYPE", value: "Petite"}
            this.props.dispatch(actionPetite)
        }
    }

    /**
     * Fonction buttonTypeG permet de définir le type de prise par Garde.
     * @param {string} garde
     */

    buttonTypeG(){
        if(this.props.type != "Garde"){
            const actionGarde = { type: "MUTATION_TYPE", value: "Garde"}
            this.props.dispatch(actionGarde)
        }
    }

    /**
     * Fonction buttonTypeGS permet de définir le type de prise par garde sans.
     * @param {string} gardeSans
     */
    buttonTypeGS(){
        if(this.props.type != "G-Sans"){
            const actionGS = { type: "MUTATION_TYPE", value: "G-Sans"}
            this.props.dispatch(actionGS)
        }
    }

    /**
     * Fonction buttonTypeGC permet de définir le type de prise par garde contre.
     * @param {string} gardeContre
     */
    buttonTypeGC(){
        if(this.props.type != "G-Co."){
            const actionGC = { type: "MUTATION_TYPE", value: "G-Co."}
            this.props.dispatch(actionGC)
        }
    }


    /**
    * Ce rendu affiche la grill du choix d'initialisation du tour
    * @param {string} preneur 
    * @param {Int} nbJoueur 
    * @param {string} roi
    * @param {string} type
    * @param {string} pseudo 
    * @param {string} pseudo2 
    * @param {string} pseudo3 
    * @param {string} pseudo4
    * @param {string} pseudo5
    */

    render(){
        if(this.props.nbJoueur>3){
            joueurFourAlert= <Button bordered light
            backgroundColor={ this.props.preneur == 'Joueur 4' ? "steelblue" : null }
            style={{flex:1, margin:2}}
                              onPress={() => this.buttonPartenaire3()}>
                                <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>{this.props.pseudo4.username}</Text>
                                </View>
                              </Button>
        } else {joueurFourAlert= <View></View>}
    
        if(this.props.nbJoueur>4){
                            joueurFiveAlert = <Button bordered light
                            backgroundColor={ this.props.preneur == 'Joueur 5' ? "steelblue" : null }
                            style={{flex:1, margin:2}}
                            onPress={() => this.buttonPartenaire4()}>
                                <View style={{width:"100%", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>{this.props.pseudo5.username}</Text>
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
                            <Text style={{color:"white"}}>{this.props.pseudo}</Text>
                        </View>
                    </Button> 


                    <Button bordered light
                        backgroundColor={ this.props.preneur == 'Joueur 2' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonPartenaire1()}>
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{this.props.pseudo2.username}</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.props.preneur == 'Joueur 3' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonPartenaire2()}
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{this.props.pseudo3.username}</Text>
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
                        backgroundColor={ this.props.type == 'G-Co.' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.buttonTypeGC()}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}> G-Co.</Text>
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

const mapStateToProps = state => {
    return {
        pseudo : state.toogleUser.pseudo,
        pseudo2 : state.tooglePlayer.pseudo2,
        pseudo3 : state.tooglePlayer.pseudo3,
        pseudo4 : state.tooglePlayer.pseudo4,
        pseudo5 : state.tooglePlayer.pseudo5,
        nbJoueur : state.toogleScore.nbJoueur,
        roi : state.toogleScore.roi,
        type : state.toogleScore.type,
        preneur : state.toogleScore.preneur,
    }
}

export default connect(mapStateToProps)(GrillChooseScreen);