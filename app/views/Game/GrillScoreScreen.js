import React, { Component } from "react";
import { View, Text, TextInput, Picker } from 'react-native';
import { Button, Label, Content, Item, Form, Input } from 'native-base';
import { connect } from 'react-redux'
import { BackHandler } from 'react-native'


/**
 * Component général permet d'afficher la grille de choix du type du partenaire (ou pas), nombre de bout et score.
 */

class GrillScoreScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            score: "",
            bou: 0,
            partenaire: ""
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      handleBackPress = () => {
        alert('Veuillez renseigner tout les champs pour pouvoir continuer.')
        return true;
      }


    /**
     * Fonction btnValid permet de valider les choix de la grill ainsi que de verifier que les scores soit réellement possible.
    * @param {Int} score
    * @param {Int} bou
    * @param {Int} partenaireScore
     */

    btnValid() {
        if(this.state.score >90 || this.state.score < 1){
            alert("Attention, votre score ne peut être correct.")
        }else{
            // console.log("this.state.bou", this.state.bou)

            const actionScore = { type: "MUTATION_SCORE", value: this.state.score }
            const actionBou = { type: "MUTATION_BOU", value: this.state.bou }
            const actionpartenaire = { type: "MUTATION_PARTENAIRE", value: this.state.partenaire }
            this.props.dispatch(actionScore)
            this.props.dispatch(actionBou)
            this.props.dispatch(actionpartenaire)
            this.props.navigation.navigate("Game")
        }
    }

    /**
    * ce rendu affiche la grill de choix de finalisation d'un tour de jeux
    * @param {Int} score 
    * @param {string} partenaire
    * @param {Int} nbJoueur
    * @param {string} pseudo
    * @param {string} pseudo2
    * @param {string} pseudo3
    * @param {string} pseudo4
    * @param {string} pseudo5
    * @param {Int} score
    * @param {Int} bou
    */

    render() {
        titleWithWho = <Text style={{
            color: "white", fontSize: 20, marginTop: 20,
            marginLeft: 20 
        }}>Avec qui : </Text>
        withWho = <View style={{
            flex: 1, flexDirection: 'row',
            marginBottom: 20,
        }}>
            <Button bordered light
                backgroundColor={this.state.partenaire == 'Joueur 1' ? "steelblue" : null}
                style={{ flex: 1, margin: 2 }}
                onPress={() => this.setState({ partenaire: "Joueur 1" })}
            >
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "white", overflow : 'scroll' }}>{this.props.pseudo}</Text>
                </View>
            </Button>


            <Button bordered light
                backgroundColor={this.state.partenaire == 'Joueur 2' ? "steelblue" : null}
                style={{ flex: 1, margin: 2 }}
                onPress={() => this.setState({ partenaire: "Joueur 2" })}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>{this.props.pseudo2.username}</Text>
                </View>
            </Button>

            <Button bordered light
                backgroundColor={this.state.partenaire == 'Joueur 3' ? "steelblue" : null}
                style={{ flex: 1, margin: 2 }}
                onPress={() => this.setState({ partenaire: "Joueur 3" })}
            >
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>{this.props.pseudo3.username}</Text>
                </View>
            </Button>

            <Button bordered light
                backgroundColor={this.state.partenaire == 'Joueur 4' ? "steelblue" : null}
                style={{ flex: 1, margin: 2 }}
                onPress={() => this.setState({ partenaire: "Joueur 4" })}
            >
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>{this.props.pseudo4.username}</Text>
                </View>
            </Button>

            <Button bordered light
                backgroundColor={this.state.partenaire == 'Joueur 5' ? "steelblue" : null}
                style={{ flex: 1, margin: 2 }}
                onPress={() => this.setState({ partenaire: "Joueur 5" })}
            >
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: "white" }}>{this.props.pseudo5.username}</Text>
                </View>
            </Button>
        </View>
        return (
            <Content>
                <View style={{
                    flex: 1,
                    marginTop: 20,
                    color: '#ffffff',
                    backgroundColor: 'rgba(52, 52, 52, 0.6)',
                }}>
                    {this.props.nbJoueur > 4 ? titleWithWho : null}
                    <View style={{
                        flex: 1,
                        flexDirection: 'column', marginTop: 20,
                        marginBottom: 20,
                    }}>
                        {this.props.nbJoueur > 4 ? withWho : null}
                    </View>
                    <Text style={{ color: "white", fontSize: 20, marginLeft: 20 }}>Nombre de bout :</Text>
                    <View style={{ flex: 1, marginTop: 20, marginBottom: 20, flexDirection: 'row' }}>
                        <Button bordered light
                            backgroundColor={this.state.bou == 0 ? "steelblue" : null}
                            style={{ flex: 1, margin: 2 }}
                            onPress={() => this.setState({ bou: 0 })}
                        >
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <Text style={{ color: "white" }}>0</Text>
                            </View>
                        </Button>


                        <Button bordered light
                            backgroundColor={this.state.bou == 1 ? "steelblue" : null}
                            style={{ flex: 1, margin: 2 }}
                            onPress={() => this.setState({ bou: 1 })}
                        >
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <Text style={{ color: "white" }}>1</Text>
                            </View>
                        </Button>

                        <Button bordered light
                            backgroundColor={this.state.bou == 2 ? "steelblue" : null}
                            style={{ flex: 1, margin: 2 }}
                            onPress={() => this.setState({ bou: 2 })}
                        >
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <Text style={{ color: "white" }}>2</Text>
                            </View>
                        </Button>

                        <Button bordered light
                            backgroundColor={this.state.bou == 3 ? "steelblue" : null}
                            style={{ flex: 1, margin: 2 }}
                            onPress={() => this.setState({ bou: 3 })}
                        >
                            <View style={{ width: "100%", alignItems: "center" }}>
                                <Text style={{ color: "white" }}>3</Text>
                            </View>
                        </Button>
                    </View>
                   
                </View>
                <Form style={{
                    backgroundColor: 'rgba(52, 52, 52, 0.6)',
                    color: "white",
                    padding: 20
                }}>
                    <Item floatingLabel>
                        <Label style={{
                            color: "white",
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>Score :</Label>
 
                        <Input
                            style={{ color: "white" }}
                            keyboardType={"number-pad"}
                            onChangeText={(score) => this.setState({ score })}
                            value={this.state.score} />

                    </Item>

                    <Button block info style={{ marginTop: 100 }} onPress={() => this.btnValid()}>
                        <Label style={{
                            color: "white",
                            fontSize: 17
                        }}>VALIDER</Label>
                    </Button>
                </Form>
            </Content>
        )
    }
}

const mapStateToProps = state => {
    return {
        type: state.toogleScore.type,
        pseudo: state.toogleUser.pseudo,
        pseudo2: state.tooglePlayer.pseudo2,
        pseudo3: state.tooglePlayer.pseudo3,
        pseudo4: state.tooglePlayer.pseudo4,
        pseudo5: state.tooglePlayer.pseudo5,
        partenaire: state.toogleScore.partenaire,
        score: state.toogleScore.score,
        nbJoueur: state.toogleScore.nbJoueur,
        bou: state.toogleScore.bou
    }
}

export default connect(mapStateToProps)(GrillScoreScreen);