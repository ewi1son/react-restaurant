import React from 'react';

class Header extends React.Component{

    render() {
        return(
        <div>
        <h1>Great Restaurant Name</h1>
        <div>
            <button 
                onClick={this.props.switchModeAppetizers}
                type="button" 
                className="btn btn-sm btn-outline-secondary m-1"
                > 
                Appetizers
            </button>
            
            <button 
                onClick={this.props.switchModeLunch} 
                type="button"                    
                className="btn btn-sm btn-outline-secondary m-1"
                >
                Lunch
            </button>

            <button 
                onClick={this.props.switchModeMain}
                type="button" 
                className="btn btn-sm btn-outline-secondary m-1"
                > 
                Main Course 
            </button>

            <button 
                onClick={this.props.switchModeSides}
                type="button" 
                className="btn btn-sm btn-outline-secondary m-1"
                > 
                Sides
            </button>

            <button 
                onClick={this.props.switchModeDessert}
                type="button" 
                className="btn btn-sm btn-outline-secondary m-1"
                > 
                Dessert
            </button>


        </div>
        </div>
        
        
        );
    }
  }

  export default Header;