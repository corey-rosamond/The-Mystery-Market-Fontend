import React from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";
import { connect } from "react-redux";
import {loginFailure, loginStart, loginSuccess} from "../redux/userSlice";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

class LoginPageComponent extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  async handleSubmit(event)
  {

    try
    {
      event.preventDefault();
      let username = this.state.username;
      let password = this.state.password;

      let data = await axios.post(
        "http://127.0.0.1:5000/api/users/login",
        {
          username,
          password
        }
      );
      localStorage.setItem("authorization_token", data.data.token);
    } catch(error)
    {
      this.setState({
        error: error.response.data.error
      });
      setTimeout(() => {
        this.setState({error: ""});
      },5000);
    }

  }

  render()
  {
    return (
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <p>{this.state.error}</p>
          <Form>
            <Input
              placeholder="username"
              onChange={e => this.setState({username: e.target.value})}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={e => this.setState({password: e.target.value})}
            />
            <Button
              onClick={e => { this.handleSubmit(e) }}
            >LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(
  mapStateToProps,
  {
    loginStart,
    loginSuccess,
    loginFailure
  }
)(LoginPageComponent);