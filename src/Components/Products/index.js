import React, { Component } from 'react';
import './style.css';

/**** MODULE ****/
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";

/**** STORE ****/
import {observer} from 'mobx-react';
import productStore from '../../Lib/Store/productStore';

const Product = observer (class Product extends Component{

    constructor(props){
        super(props);
        this.state = {
            new_task_name: "Рыба",
            new_task_price: "3",
            edit_task: "",
        };
        this.addNewTask = this.addNewTask.bind(this);
    }

    addNewTask(){
        if(this.state.new_task_name === "" || this.state.new_task_price === "") return false;
        let newProduct = { name: this.state.new_task_name, price: this.state.new_task_price};
        productStore.addProduct(newProduct);
        this.setState({new_task_name: "", new_task_price: ""});
    }

    editTask(index){
        let old_array = this.state.tasks_list;
        for(let i = 0; i < old_array.length; i++){
            old_array[i].view = true;
            if(i === index) old_array[i].view = false;
        }
        let old_value = old_array[index].name;
        this.setState({
            tasks_list: old_array,
            edit_task: old_value
        });
    }

    componentWillMount(){document.title="Task"}
    render(){
        return(
            <main className="task_main">
                <h1>Добавьте продукт</h1>
                <div className="add_panel">
                    <input type="text"
                           placeholder="Название продукта"
                           value={this.state.new_task_name}
                           onChange={(e) => this.setState({new_task_name: e.target.value})}
                           onKeyPress={(e) => e.charCode === 13 ? this.addNewTask() : ""}
                    />
                    <input type="number"
                           placeholder="Название продукта"
                           value={this.state.new_task_price}
                           onChange={(e) => this.setState({new_task_price: e.target.value})}
                           onKeyPress={(e) => e.charCode === 13 ? this.addNewTask() : ""}
                    />
                    <button onClick={this.addNewTask} className="add_product">Add Product</button>
                </div>
                <h1>Количество продуктов: {productStore.array_product.length}</h1>
                <ol className="list">
                    {productStore.array_product.map((item, index)=>{
                        return(
                            <Card className="products_card" key={index}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{item.name}</Typography>
                                        <Typography component="p">Цена: {item.price}$</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => this.deleteProduct(index)}>Изменить</Button>
                                    <Button size="small" color="primary" onClick={() => productStore.deleteProduct(index)}>Удалить</Button>
                                </CardActions>
                            </Card>
                        )
                    })}
                </ol>
            </main>
        )
    }
});

export default Product;