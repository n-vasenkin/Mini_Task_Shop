import React, {Component} from "react";

import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

/**** STORE ****/
import {observer} from 'mobx-react';
import productStore from '../../../Lib/Store/productStore';
import basketStore from "../../../Lib/Store/basketStore";

const Trade = observer (class Trade extends Component{
    constructor(props){
        super(props);
        this.state = {
            array_product: this.props.array_product,
            info_modal: {name: null, price: null, info: null},
            open: false,
        };
        this.addToBakset = this.addToBakset.bind(this);
    }

    handleClickOpen(index){
        this.setState({
            open: true,
            info_modal: productStore.array_product[index],
        });
    };

    addToBakset(index){
        let checkProduct = basketStore.basket.filter(el => {return el.id === index});
        if(checkProduct.length === 0){
            let product = productStore.array_product[index];
            let {name, price} = product;
            basketStore.addProductToBakset({id: index, name, price, count: 1});
        }else{
            let object = basketStore.basket.find(el => {return el.id === index});
            object.count++;
            basketStore.checkSumBasket();
        }
    }

    render(){
        return(
            <div className="product_box">
                {productStore.array_product.map((item, index)=>{
                    return(
                        <Card className="product" key={index}>
                            <CardActionArea  onClick={this.handleClickOpen.bind(this, index)}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{item.name}</Typography>
                                    <Typography component="p">Цена: {item.price}$</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => this.addToBakset(index)}>В корзину</Button>
                            </CardActions>
                        </Card>
                    )
                })}

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Название продукта: "{this.state.info_modal.name}"</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Цена данного продукта: {this.state.info_modal.price} $
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({open: false})} color="primary">Закрыть</Button>
                    </DialogActions>
                </Dialog>

            </div>
        )
    }
});

export default Trade;


