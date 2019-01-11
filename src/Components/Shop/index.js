import React, {Component} from 'react';
import Trade from './Trade';
import Basket from './Basket/';
import './style.css';

/**** MODULE ****/
import TextField from '@material-ui/core/TextField';

/**** STORE ****/
import {observer} from  'mobx-react';

const Shop = observer (class Shop extends Component{

    constructor(props) {
        super(props);
        this.state = {
            search_array: [],
            basket_product: [],
            text: "",
        };
        this.search = this.search.bind(this);
    }

    search(event){
        let search_text = event.target.value;
        this.setState({text: search_text});
        let new_arr = this.state.search_array.filter(el => {
            return el.name.toLowerCase().slice(0, search_text.length) === search_text.toLowerCase();
        });
        this.setState({array_product: new_arr});
    }

    componentWillMount() {
        document.title = "Shop";
        this.setState({search_array: this.state.search_array});
    }

    render(){
        return(
            <main className="shop_main">
                <div className="left_shop">
                    <TextField
                        className="search_input"
                        id="standard-name"
                        label="Search"
                        value={this.state.text}
                        onChange={this.search}
                    />
                    <Trade />
                </div>
                <div className="basket_shop">
                    <Basket />
                </div>
            </main>
        )
    }

});

export default Shop;