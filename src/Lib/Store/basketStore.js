import { observable, decorate } from 'mobx';

class BasketStore {
    constructor(){
        this.basket = [];
        this.sum = 0;
    }

    addProductToBakset(data){
        this.basket.push(data);
        this.checkSumBasket();
    }

    checkSumBasket(){
        this.sum = this.basket.reduce((sum, product)=> sum + (product.price * product.count), 0).toFixed(2);
    }
}

decorate(BasketStore, {
    basket: observable,
    sum: observable
});

const basketStore = new BasketStore();
export default basketStore;
export {basketStore};