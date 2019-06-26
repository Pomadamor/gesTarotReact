import React, {Component} from "react";
import {View} from "react-native";

export const TurnsContext = React.createContext();

export const withTurns = SomeComponent => props => <TurnsContext.Consumer>
    {(turnsProps)=><SomeComponent {...props} {...turnsProps}/>}
</TurnsContext.Consumer>;

export default class Turns extends Component {

    constructor(props){
        super(props);

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

    render(){
        const {children} = this.props;
        return <TurnsContext.Provider value={{
            ...this.state
        }}>
            {children}
        </TurnsContext.Provider>
    }
}