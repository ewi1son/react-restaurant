import React from 'react';
import axios from 'axios';

export class Dessert extends React.Component {
    state = {
        menu: []
    }
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         menuitems: []
    //     }    
    // }

    componentDidMount(){
        axios.get('https://entree-f18.herokuapp.com/v1/menu/1')
        // let apiURL = 'https://entree-f18.herokuapp.com/v1/menu/12'
        // const axiosData = axios.get(apiURL)
            .then(res => {
                console.log(res.data.menu_items);
                this.setState({ menu: res.data.menu_items });
                console.log("line 23", this.state.menu)

            });
        
        }
 
    render(){
        return (
<div>
    
 <ul className="list-group">
        <h2> Dessert </h2>
    {this.state.menu.map(menu =>
     <div>
        <li className="list-group-item d-flex justify-content-between        align-items-center">      
            {menu.description.split(' with ')[0]}     
                <span 
                    className="badge badge-primary badge-pill badge-dark text-right"
                >
                    ${(menu.description.length)*2}
                </span>
        </li>
        {/* <li>{menu.description}</li> */}
        <p></p>
     </div>)
    }
 </ul>
</div> 
      )
    }
}

export default Dessert;