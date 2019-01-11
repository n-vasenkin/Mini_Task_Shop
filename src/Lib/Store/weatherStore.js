import { observable, decorate } from 'mobx';

class WeatherStore {
    constructor(){
        this.weather = {name: "", temp: null};
    }

    changeData(data){
        let {name, temp} = data;
        return this.weather = {name, temp}
    }

}

decorate(WeatherStore, {
   weather: observable,
});

const weatheStore = new WeatherStore();
export default weatheStore;
export {weatheStore};