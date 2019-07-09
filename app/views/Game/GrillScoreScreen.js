import React, {Component} from "react";
import { View, Text, TextInput} from 'react-native';
import { Button, Label } from 'native-base';
import { connect } from 'react-redux'

class GrillScoreScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
          score: "",
          bou: "",
          partenaire: ""
        }
    }

    btnValid(){
        const actionScore = { type: "MUTATION_SCORE", value: this.state.score}
        const actionBou = { type: "MUTATION_BOU", value: this.state.bou}
        const actionpartenaire = { type: "MUTATION_PARTENAIRE", value: this.state.partenaire}
        this.props.dispatch(actionScore)
        this.props.dispatch(actionBou)
        this.props.dispatch(actionpartenaire)
        this.props.navigation.navigate("Game")
    }

    render(){
        titleWithWho = <Text style={{color:"white", fontSize:20}}>Avec qui ?</Text>
        withWho = <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button bordered light
                        backgroundColor={ this.state.partenaire == 'Joueur 1' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({partenaire : "Joueur 1"})}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{this.props.pseudo1}</Text>
                        </View>
                    </Button> 


                    <Button bordered light
                        backgroundColor={ this.state.partenaire == 'Joueur 2' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({partenaire : "Joueur 2"})}>
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{this.props.pseudo2}</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.state.partenaire == 'Joueur 3' ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({partenaire : "Joueur 3"})}
                        >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>{this.props.pseudo3}</Text>
                        </View>
                    </Button>

                    <Button bordered light
                            backgroundColor={ this.state.partenaire == 'Joueur 4' ? "steelblue" : null }
                            style={{flex:1, margin:2}}
                            onPress={() => this.setState({partenaire : "Joueur 4"})}
                            >
                            <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>{this.props.pseudo4}</Text>
                            </View>
                        </Button>

                        <Button bordered light
                            backgroundColor={ this.state.partenaire == 'Joueur 5' ? "steelblue" : null }
                            style={{flex:1, margin:2}}
                            onPress={() => this.setState({partenaire : "Joueur 5"})}
                            >
                            <View style={{width:"100%", alignItems:"center"}}>
                                <Text style={{color:"white"}}>{this.props.pseudo5}</Text>
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
                        backgroundColor={ this.state.bou == 0 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({bou : 0})}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>Aucun bout</Text>
                        </View>
                    </Button> 


                    <Button bordered light
                        backgroundColor={ this.state.bou == 1 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({bou : 1})}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>1 bout</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.state.bou == 2 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({bou : 2})}
                    >
                        <View style={{width:"100%", alignItems:"center"}}>
                            <Text style={{color:"white"}}>2 bout</Text>
                        </View>
                    </Button>

                    <Button bordered light
                        backgroundColor={ this.state.bou == 3 ? "steelblue" : null }
                        style={{flex:1, margin:2}}
                        onPress={() => this.setState({bou : 3})}
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
                        onChangeText={(score) => this.setState({score})}
                        value={this.state.score}
                    />
                </View>

                <Button block info style={{ marginTop: 100}} onPress={() => this.btnValid()}>
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
        type : state.toogleScore.type,
        pseudo1 : state.tooglePlayer.pseudo1,
        pseudo2 : state.tooglePlayer.pseudo2,
        pseudo3 : state.tooglePlayer.pseudo3,
        pseudo4 : state.tooglePlayer.pseudo4,
        pseudo5 : state.tooglePlayer.pseudo5,
        partenaire : state.toogleScore.partenaire,
        score : state.toogleScore.score,
        nbJoueur : state.toogleScore.nbJoueur,
        bou : state.toogleScore.bou
    }
}

export default connect(mapStateToProps)(GrillScoreScreen);