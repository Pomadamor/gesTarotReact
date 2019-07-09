import React, {Component} from "react";
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import AsyncStorage from "@react-native-community/async-storage";
import { BackHandler } from 'react-native'

export default class RegisterScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            phone:"",
            email: "",
            password: "",
            password2: "",
            error: ""
        }
    }

    async handleRegister() {
      const {username} = this.state.username;
      const {phone} = this.state.phone
      const {email} = this.state.email;
      const {password} = this.state.password;
        try {
            const res = await fetch('http://51.15.203.158/api/user', {
                method : 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                payload: JSON.stringify({
                  username: username,
                  email: email,
                  phone: phone,
                  password: password,
                }),
            });
            if(res.ok){
                console.log("RESPONSE TRUE", res)
                // const {token} = await res.json();
                // await AsyncStorage.setItem("token", token);
                // this.props.navigation.navigate("Loader");
            } else {
              console.log("RESPONSE FALSE", res)
                // const {message} = await res.json();
                // this.setState({ error: message });
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
            <Item floatingLabel>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Phone</Label>
              <Input onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}/>
            </Item>
            <Item floatingLabel last>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Pseudo</Label>
              <Input onChangeText={(username) => this.setState({username})}
                value={this.state.username}/>
            </Item>
            <Item floatingLabel last>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Password</Label>
              <Input onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
            </Item>
            <Item floatingLabel last>
            <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Confirm Password</Label>
              <Input onChangeText={(password2) => this.setState({password2})}
                value={this.state.password2}/>
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