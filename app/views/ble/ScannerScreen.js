import React, {Component} from "react";
import {Text} from "native-base";

export default class ScannerScreen extends Component {

    static navigationOptions = {
        title: "Scanner"
    };

    componentWillMount(){
        const {startScan} = this.props;
        console.log("TETS",this.props)
        startScan
    }

    render(){
        const {startScan, peripherals} = this.props;
        const devices = Array.from(peripherals.values());

        return <View>
            <Button onPress={startScan}>
                <Text>Start Scan</Text>
            </Button>
            <DeviceList data={devices}/>
        </View>
    }
}