import React, { Component } from "react";
import FormComponent from "./FormComponent";

//https://developer.mozilla.org/en-US/Web/API/WindowOrWorkerGlobalScope/fetch
//https://swapi.co/

//function App() {
//map accepts each number as a paramter of a function
/*const jokeArr = jokesData.map(joke => <Joke key={joke.id} jokes={joke} />);
  const ProductsArr = schoolProducts.map(prod => (
    <Products key={prod.id} prods={prod} />
  ));

  //const Arr = numberofCo;
  const todosArr = todosData.map(item => (
    <TodoItems key={item.id} items={item} />
  ));

  return <React.Fragment>{todosArr}</React.Fragment>;*/
//}
class Form extends Component {
  constructor() {
    super();
    this.state = {
      // todos: todosData,
      isLoading: true,
      unreadMessages: [
        "Call your mom",
        "New spam email available. All links are safe to click"
      ],
      islogged: false,
      loading: false,
      character: {},
      last: "",
      first: "",
      value: "",
      isFriendly: true,
      gender: "",
      favColour: "blue",
      age: "",

      isVegan: false,
      isKosher: false,
      isLactoseFree: false,

      showDetails: false

      // count: 0
    };
    //binding "this"
    //this.handleClick = this.handleClick.bind(this);
  }
  /* handleClick = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };*/
  //React Lifecycle
  //1. ComponentWillMount will run first followed by render() followed by ComponentDidMount
  //2. ComponentDidMount will only run once throughout the whole program, we can include ajax and api calls in this method
  //3. After SetState is activated, The component will re render.

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://swapi.co/api/people/1";
    this.setState({ loading: true });
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => this.setState({ character: data, loading: false }));

    /*setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);*/
  }

  handleChecked = Id => {
    this.setState(() => {
      const td_item = this.state.todos.map(todo => {
        if (todo.id === Id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

      return { todos: td_item };
    });
  };

  handleLog = () => {
    /* if (!this.state.islogged) {
      status = true;
    }*/
    /*var status = false;
    
    !this.state.islogged ? (status = true) : (status = false);*/

    // this.setState({ islogged: status });
    this.setState(() => {
      return {
        islogged: !this.state.islogged
      };
    });
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ showDetails: true });
  };

  render() {
    //state is maintianed by a component
    //State has to be in a class based component

    //calling Component class
    //must always add super to class based component
    /*const todosArr = this.state.todos.map(item => (
      <TodoItems key={item.id} items={item} onHandle={this.handleChecked} />
    ));*/
    // const status = this.check();
    // return <div>{todosArr}</div>;
    const len = this.state.unreadMessages.length;
    const text = this.state.loading ? "Loading..." : this.state.character.name;
    return (
      /*<div>
        <button onClick={this.handleLog}>
          {this.state.islogged ? <span>Log out</span> : <span>Login</span>}
        </button>
      </div>*/
      <FormComponent
        onHandle={this.handleChange}
        onSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}

export default Form;
