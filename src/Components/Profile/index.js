import React, {Component} from 'react';
import './style.css';

/**** COMPONENT ****/
import Basket from '../Shop/Basket/index'

/**** MODULE ****/

/**** STORE ****/
import {observer} from 'mobx-react';
import productStore from "../../Lib/Store/productStore";

const Profile = observer(class extends Component{

    componentWillMount(){document.title="Profile"}
    render(){
        return(
            <main className="profile_main">
                <div className="profile_column">
                    <Basket/>
                </div>
                <div className="profile_column">
                    <h3 className="basket_h3">Мои товары ({productStore.array_product.length} шт.)</h3>
                    <ol>
                        {productStore.array_product.map((item, index) => {
                            return(
                                <li key={index} className="list_my_prod">{item.name} {item.price + " $"}</li>
                            )
                        })}
                    </ol>
                </div>

            </main>
        )
    }
});

export default Profile;
