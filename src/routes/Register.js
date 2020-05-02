import React, { Component } from "react";
import { Button, Input, Container, Header } from "semantic-ui-react";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  onSubmit = () => {
      console.log(this.state);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Input
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          type="password"
          placeholder="Password"
          fluid
        />
        <Button onClick={this.onSubmit}>Submit</Button>
      </Container>
    );
  }
}
