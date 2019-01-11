import React, {Component} from 'react';
import './style.css';

/**** MODULE ****/
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

/**** STORE ****/
import {observer} from 'mobx-react';
import basketStore from "../../../Lib/Store/basketStore";

const Basket = observer(
    class Basket extends Component{
        constructor(props){
            super(props);
            this.state = {
                basket_product: basketStore.basket,
            }
        }

        render(){
            return(
                <div>
                    <h3 className="basket_h3">Моя корзина ({basketStore.basket.length} шт.)</h3>
                    {this.state.basket_product.length === 0 ? <p className="clear_basket">- В вашей корзине нет товаров</p> :
                        <Paper className="table_basket">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название товара</TableCell>
                                        <TableCell numeric>Цена</TableCell>
                                        <TableCell numeric>Кол-во</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.basket_product.map(row => {
                                        return (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                                <TableCell numeric>{row.price}</TableCell>
                                                <TableCell numeric>{row.count}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    <TableRow>
                                        <TableCell/>
                                        <TableCell/>
                                        <TableCell component="th" scope="row">Итого: {basketStore.sum}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    }
                </div>
            )
        }
    });

export default Basket;
