import React, {Component} from "react";
import { BackHandler } from 'react-native'
import { Button, Content, Form, Item, Input, Label } from 'native-base';
import {connect} from 'react-redux'

class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            usermail: "",
            userpassword:"",
            error: ""
        }
    }

    login(){
      const actionVerif= { type: "MUTATION_VERIF", value: true}
      this.props.dispatch(actionVerif)
      this.props.navigation.navigate("Home")
    }

    render(){
        const {error} = this.state;
        return <Content style={{margin:20}}>
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
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{
                color:"white",
                fontSize: 17, 
                fontWeight: 'bold'}}>Password</Label>
              <Input/>
            </Item>
            <Button block info style={{ marginTop: 100}} onPress={() => this.login()}>
            <Label style={{
                color:"white",
                fontSize: 17}}>VALIDER</Label>
          </Button>
          </Form>
          {/* <Label style={{
                fontSize: 20,
                textAlign: "center",
                marginTop:20, 
                color: 'black'
                }}>Mot de passe oublié ?</Label> */}
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

const mapStateToProps = state => {
  return {
    verif : state.toogleUser.verif,
  }
}

export default connect(mapStateToProps)(LoginScreen)