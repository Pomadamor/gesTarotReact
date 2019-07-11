import React, {Component} from "react";
import {Text} from "native-base";

export default class DeviceScreen extends Component {
    componentDidMount(){
        const {navigation, onConnect} = this.props;

        const id = navigation.getParam("id");
        onConnect(id);

    }

    render(){

        const {onConnect, id} = this.props;

        return <Text>Hello Device</Text>
    }

}