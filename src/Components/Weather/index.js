import React, {Component} from 'react';
import './style.css'
import {observer} from 'mobx-react';
import weatherStore from '../../Lib/Store/weatherStore';

/** Material **/
const axios = require('axios');

class MenuList extends Component{
    render(){
        return(
            <ol className="city_ol">
            {
                this.props.array_city.map((item,index) => {
                    return(
                        <li key={index}>
                            <div className="width_menu" onClick={() => this.props.open(item)}>
                                {item.name}
                            </div>
                        </li>
                    )
                })
            }
            </ol>
        )
    }
}
class WriteWeather extends Component{
    render(){
        return(
            <div className="write_weather">
                {this.props.open.name}<br/>
                Температура: {this.props.open.temp}
            </div>
        )
    }
}

const Weather = observer(
    class Weather extends Component{
    constructor(props) {
        super(props);
        this.state = {
            array_city: [
                {city: "Moscow", name: "Москва"},
                {city: "Yekaterinburg", name: "Екатеринбург"},
                {city: "Petersburg", name: "Санкт-Петербург"},
            ],
            open_city: {
                show:   false,
                name: "",
                temp: "",
            },
            date: "",
            weather: [],
            temp: "",
        };
        // this.show_map = this.show_map.bind(this);
        this.getDate = this.getDate.bind(this);
        Weather.converter = Weather.converter.bind(this);

        this.openCity = this.openCity.bind(this);
        this.axiosGet = this.axiosGet.bind(this);
    }

    getDate(){
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let full_date = `${day}.${month}.${year}`;
        this.setState({date: full_date});
    }

    static converter(temp){
        const razn = -272.15;
        let kelv = temp.temp;
        return (kelv + razn).toFixed(0);
    }


    // show_map(position) {
    //     const latitude = position.coords.latitude;
    //     const longitude = position.coords.longitude;
    //
    //     const url = "https://api.openweathermap.org/data/2.5/weather?lat="+ latitude +"&lon="+ longitude +"&appid=6eec8eb9afcd7465cadf658f10b82217";
    //     axios.get(url)
    //         .then(res => {
    //             this.setState({
    //                 weather: res.data,
    //                 city: res.data.name,
    //             });
    //             this.converter(res.data.main);
    //             console.info(this.state.weather);
    //         }) // После ответа
    //         .catch(err => console.error(err));   // Ошибки
    // }

    componentWillMount() {
        // navigator.geolocation.getCurrentPosition(this.show_map);
        this.getDate();
        document.title="Weather";
    }

    async axiosGet(city, ob){
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6eec8eb9afcd7465cadf658f10b82217`;
        return axios.get(url)
            .then(res => {
                ob.temp = Weather.converter(res.data.main);
                this.setState({open_city: ob});
                weatherStore.changeData(ob);
            })
            .catch(err => console.error(err));
    }

    async openCity(ob){
        let open = this.state.open_city;
        open.show = true;
        open.name = ob.name;
        await this.axiosGet(ob.city, open);
    }


    render(){
        return(
            <main>
                <h1 className="weather_h1">Подгода {this.state.date}</h1>
                <MenuList
                    array_city={this.state.array_city}
                    open={this.openCity}
                />
                {this.state.open_city.show && <WriteWeather open={this.state.open_city}/>}
            </main>
        )
    }
});

export default Weather;
