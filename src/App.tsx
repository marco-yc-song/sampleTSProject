import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

// <props, state, ~~~>로 ts에게 state가 뭘로 구성된지 알려줌
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };

  render() {
    const { counter, name } = this.state;

    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>

        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };
}

export default App;
