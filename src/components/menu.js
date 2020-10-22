import React from 'react';
import axios from 'axios';

export class Menu extends React.Component {
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
        axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
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
        <h2> Menu </h2>
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

export default Menu;

       // .then(
        //     function (response) {
        //   // handle success
        //     console.log('line 18 cdm axios', response.data);
        //     console.log('line 20', response.data.menu_items)
        //     return response.data
        //     // itemDescription = response.data.menu_items

        


        // .catch(function (error) {
        //   // handle error
        //   console.log(error);
        // .then(function () {
        //   // always executed
        // });
        // console.log("line 33",axiosData)
        
        // this.setState({ menuitems: response.data.menu_items})
        
        //  console.log(res)