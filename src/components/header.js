import React from 'react';

class Header extends React.Component{

    render() {
        return(
        <div>
        <h1>Great Restaurant Name</h1>
        <h5>123 Creativity Ln</h5>
        <h5> 24 hours / 7 days</h5>
        <div>
            <button 
                onClick={this.props.switchModeAppetizers}
                type="button" 
                className="btn btn-lg btn-outline-secondary m-2"
                > 
                Appetizers
            </button>
            
            <button 
                onClick={this.props.switchModeLunch} 
                type="button"                    
                className="btn btn-lg btn-outline-secondary m-2"
                >
                Lunch
            </button>

            <button 
                onClick={this.props.switchModeMain}
                type="button" 
                className="btn btn-lg btn-outline-secondary m-2"
                > 
                Main Course 
            </button>

            <button 
                onClick={this.props.switchModeSides}
                type="button" 
                className="btn btn-lg btn-outline-secondary m-2"
                > 
                Sides
            </button>

            <button 
                onClick={this.props.switchModeDessert}
                type="button" 
                className="btn btn-lg btn-outline-secondary m-2"
                > 
                Dessert
            </button>


        </div>
        </div>
        
        
        );
    }
  }

  export default Header;