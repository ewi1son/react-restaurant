import React from 'react';
import Menu from './components/menu';
import Header from './components/header';
import Appetizers from './components/appetizers';
import Lunch from './components/lunch';
import Sides from './components/sides';
import Dessert from './components/dessert';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: "main"
    }
  }
  render(){
    if(this.state.view === "main"){
    return(
      <div className="container text-center mt-4">
        <Header
          switchModeAppetizers={this.switchModeAppetizers}
          switchModeDessert={this.switchModeDessert}
          switchModeLunch={this.switchModeLunch}
          switchModeMain={this.switchModeMain}
          switchModeSides={this.switchModeSides}
        />
        <Menu />
        </div>
    );
      } else if (this.state.view === "appetizers"){
        return(
        <div className="container text-center mt-4">
        <Header
          switchModeAppetizers={this.switchModeAppetizers}
          switchModeDessert={this.switchModeDessert}
          switchModeLunch={this.switchModeLunch}
          switchModeMain={this.switchModeMain}
          switchModeSides={this.switchModeSides}
        />
        <Appetizers />
        </div>
      );
    } else if (this.state.view === "dessert"){
      return(
      <div className="container text-center mt-4">
      <Header
        switchModeAppetizers={this.switchModeAppetizers}
        switchModeDessert={this.switchModeDessert}
        switchModeLunch={this.switchModeLunch}
        switchModeMain={this.switchModeMain}
        switchModeSides={this.switchModeSides}
      />
      <Dessert />
      </div>
    );
  } else if (this.state.view === "lunch"){
    return(
    <div className="container text-center mt-4">
    <Header
      switchModeAppetizers={this.switchModeAppetizers}
      switchModeDessert={this.switchModeDessert}
      switchModeLunch={this.switchModeLunch}
      switchModeMain={this.switchModeMain}
      switchModeSides={this.switchModeSides}
    />
    <Lunch />
    </div>
  );
    } else if (this.state.view === "sides"){
      return(
              <div className="container text-center mt-4">
              <Header
                switchModeAppetizers={this.switchModeAppetizers}
                switchModeDessert={this.switchModeDessert}
                switchModeLunch={this.switchModeLunch}
                switchModeMain={this.switchModeMain}
                switchModeSides={this.switchModeSides}
              />
              <Sides />
              </div>
            );
            } 
  
  }

  switchModeAppetizers = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "appetizers"
    }));
    console.log(this.state.view)
  }

  switchModeLunch = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "lunch"
    }));
    console.log(this.state.view)
  }

  switchModeMain = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "main"
    }));
    console.log(this.state.view)
  }

  switchModeSides = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "sides"
    }));
    console.log(this.state.view)
  }

  switchModeDessert = () => {
    this.setState(state => ({
      // whatever value was of state.editor before, make it the opposite
      view: "dessert"
    }));
    console.log(this.state.view)
  }



  
}
export default App;
