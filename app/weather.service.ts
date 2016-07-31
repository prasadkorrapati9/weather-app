import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { Weather } from './weather';


@Injectable()
export class WeatherService {
	private weatherApiURL:string = "http://api.openweathermap.org/data/2.5/weather?appid=0e62a0276d1994560dd1848259071122";

	constructor(private _http:Http) {} 

	getWeatherUrl(city: string) {
		return this.weatherApiURL + "&q=" + city;
	}

	getWeather(city:string) {
		return new Observable(observable => {
			this._http.get(this.getWeatherUrl(city))
				.map(res => res.json())
				.subscribe(res=> {
					if(res.cod == "404") {
						observable.error(res.message);
					} else {
						var weather:Weather = res.weather[0];
						weather.city = city;
						observable.next(weather);
					}
				});
		});
	}
}