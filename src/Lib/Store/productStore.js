import {observable, decorate} from 'mobx';

class ProductStore {

    constructor(){
        this.array_product = [
            {name: "Стол",    price: 2.3, },
            {name: "Кровать", price: 4.2, },
            {name: "Окно",    price: 1.4, },
            {name: "Дверь",   price: 3.4, },
            {name: "Стул",    price: 4.4, },
            {name: "Стена",   price: 5.1, },
        ];
    }

    addProduct(data){
        this.array_product.push(data);
    }

    deleteProduct(index){
        let removeArray = this.array_product;
        delete removeArray[index];
        removeArray = removeArray.filter(function(n){return n !== undefined});
        this.array_product = removeArray;
    }

}

decorate(ProductStore, {
   array_product: observable,
});

const productStore = new ProductStore();
export default productStore;
export {productStore};