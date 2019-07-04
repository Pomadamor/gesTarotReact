import React, {Component} from "react";
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import AsyncStorage from "@react-native-community/async-storage";
import { BackHandler } from 'react-native'


export default class RegisterScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            useremail: "",
            userpassword: "",
            error: ""
        }
    }

    async handleRegister() {
        const {useremail} = this.state;
        const {method, url} = apiRoutes.register;
        try {
            const res = await fetch(url, {
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({useremail})
            });
            if(res.ok){
                const {token} = await res.json();
                await AsyncStorage.setItem("token", token);
                this.props.navigation.navigate("Loader");
            } else {
                const {message} = await res.json();
                this.setState({ error: message });
            }
        } catch(e){
            console.log(e);
        }

    }

    render(){
        const {error} = this.state;
        return <Content style={{marginLeft: 16, marginRight: 16}}>
          <Label>{error}</Label>
          <Form style={{
              backgroundColor: 'rgba(52, 52, 52, 0.6)',
              color: "white",
              padding:20}}>
            <Item floatingLabel>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Email</Label>
              <Input onChangeText={(useremail) => this.setState({useremail})}
                value={this.state.useremail}/>
            </Item>
            <Item floatingLabel last>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Pseudo</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Confirm Password</Label>
              <Input />
            </Item>
            <Button block info style={{ marginTop: 100}} onPress={()=>this.handleRegister()}>
            <Label style={{
                color:"white",
                fontSize: 17}}>Valider</Label>
          </Button>
          </Form>
        </Content>
        }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      handleBackPress = () => {
        this.props.navigation.navigate("Choose"); // works best when the goBack is async
        return true;
      }

}