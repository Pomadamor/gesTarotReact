import React, {Component} from "react";
import { View, Text, TextInput} from 'react-native';
import { Button, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'

class GrillScoreScreen extends Component {

    changeScore(score){
        console.log(score)
        const actionScore = { type: "MUTATION_SCORE", value: score}
        this.props.dispatch(actionScore)
    }

    bou(nb){
        const actionBou = { type: "MUTATION_BOU", value: nb}
        this.props.dispatch(actionBou)
    }

    buttonPartenaire0(){
        if(this.props.partenaire != "Joueur 1"){
            const actionpartenaire1 = { type: "MUTATION_PARTENAIRE", value: "Joueur 1"}
            this.props.dispatch(actionpartenaire1)
        }
    }

    buttonPartenaire1(){
        if(this.props.partenaire != "Joueur 2"){
            const actionpartenaire2 = { type: "MUTATION_PARTENAIRE", value: "Joueur 2"}
            this.props.dispatch(actionpartenaire2)
        }
    }

    buttonPartenaire2(){
        if(this.props.partenaire != "Joueur 3"){
            const actionpartenaire3 = { type: "MUTATION_PARTENAIRE", value: "Joueur 3"}
            this.props.dispatch(actionpartenaire3)
        }
    }

    buttonPartenaire3(){
        if(this.props.partenaire != "Joueur 4"){
            const actionpartenaire4 = { type: "MUTATION_PARTENAIRE", value: "Joueur 4"}
            this.props.dispatch(actionpartenaire4)
        }
    }

    buttonPartenaire4(){
        if(this.props.partenaire != "Joueur 5"){
            const actionpartenaire5 = { type: "MUTATION_PARTENAIRE", value: "Joueur 5"}
            this.props.dispatch(actionpartenaire5)
        }
    }

    render(){

            titleWithWho = <Text style={{color:"white", fontSize:20}}>Avec qui ?</Text>
            withWho = <View style={{flex: 1, flexDirection: 'row'}}>
                        <Button bordered light
                            backgroundColor={ this.props.partenaire == 'Joueur 1' ? "steelblue" : null }
                            style={{flex:1, margin:2}}
                            onPress={() => this.buttonPartenaire0()}
                        >
                            <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>Joueur 1</Text>
                            </View>
                        </Button> 


                        <Button bordered light
                            backgroundColor={ this.props.partenaire == 'Joueur 2' ? "steelblue" : null }
                            style={{flex:1, margin:2}}
                            onPress={() => this.buttonPartenaire1()}>
                            <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>Joueur 2</Text>
                            </View>
                        </Button>

                        <Button bordered light
                            backgroundColor={ this.props.partenaire == 'Joueur 3' ? "steelblue" : null }
                            style={{flex:1, margin:2}}
                            onPress={() => this.buttonPartenaire2()}
                            >
                            <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>Joueur 3</Text>
                            </View>
                        </Button>

                        <Button bordered light
                                backgroundColor={ this.props.partenaire == 'Joueur 4' ? "steelblue" : null }
                                style={{flex:1, margin:2}}
                                onPress={() => this.buttonPartenaire3()}
                            >
                                <View style={{width:"100%", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>Joueur 4</Text>
                                </View>
                            </Button>

                            <Button bordered light
                                backgroundColor={ this.props.partenaire == 'Joueur 5' ? "steelblue" : null }
                                style={{flex:1, margin:2}}
                                onPress={() => this.buttonPartenaire4()}
                            >
                                <View style={{width:"100%", alignItems:"center"}}>
                                    <Text style={{color:"white"}}>Joueur 5</Text>
                                </View> 
                            </Button>
                    </View>
        return (
            <View style={{
                flex:1, 
                marginTop: "20%", 
                marginBottom: "20%", 
                margin:20,
                color: '#ffffff',
                backgroundColor: 'rgba(52, 52, 52, 0.6)',
                }}>
                { this.props.nbJoueur > 4  ? titleWithWho : null }
                 <View style={{
                    flex: 1,
                    flexDirection: 'column',  
                    }}>
                        { this.props.nbJoueur > 4  ? withWho : null }
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button bordered light
                        backgroundColor={ this.props.bou == 0 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.bou(0)}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>Aucun bout</Text>
                        </View>
                    </Button> 


                    <Button bordered light
                        backgroundColor={ this.props.bou == 1 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.bou(1)}>
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>1 bout</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.props.bou == 2 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.bou(2)}
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>2 bout</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.props.bou == 3 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.bou(3)}
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>3 bout</Text>
                        </View>
                    </Button>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={{color:"white", fontSize:20, marginRight: 20}}>Score</Text>
                    <TextInput
                        style={{height: 36, width: 80, borderColor: 'white', color: 'white', borderWidth: 1}}
                        onChangeText={(score) => this.changeScore(score)}
                        value={this.props.score}
                    />
                </View>

                <Button block info style={{ marginTop: 100}} onPress={() => this.props.navigation.navigate("Game")}>
                    <Label style={{
                        color:"white",
                        fontSize: 17}}>VALIDER</Label>
                </Button>       
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        partenaire : state.toogleScore.partenaire,
        score : state.toogleScore.score,
        nbJoueur : state.toogleScore.nbJoueur,
        bou : state.toogleScore.bou
    }
}

export default connect(mapStateToProps)(GrillScoreScreen);