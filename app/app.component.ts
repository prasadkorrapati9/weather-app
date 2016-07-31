import { Component } from '@angular/core';
import { Weather } from './weather';
import { WeatherService } from './weather.service';
@Component({
  selector: 'my-app',
  template: `<header>
  		<h1>Weather App</h1>
  	</header>
  	<div class="content">
  		<input type="text" [(ngModel)]="city" (keyup)="addCity(city, $event)" placeholder="Search weather for your city">
  		<p *ngIf="errorMessage" class="error-message">{{errorMessage}}</p>
		<ul *ngFor="let weather of weatherOfCities" class="weather-card">
			<li>
				<h2>{{weather.city}}</h2>
				<ul>
					<li>Weather Type: {{weather.main}}</li>
					<li>Description: {{weather.description}}</li>
				</ul>

			</li>
		</ul>
  	</div>
  	
  `,
  styles: [`
  	header h1 {
  		padding: 10px;
  		background: #5F9EA0;
  		color: #f5f5f5;
  		text-shadow: 1px 1px 4px #808080;
  	}

  	.content {
  		padding: 10x;
  	}

  	input {
  		font-size: 16px;
  	}

  	.weather-card {
  		border-bottom: 1px solid #d3d3d3;
  		padding-bottom: 10px;
  	}

  	.error-message {
  		color: red;
  		font-size: 8px;
  	}
  `],
  providers: [WeatherService]
})
export class AppComponent {
	public city: string;
	public cities: Array<string>;
	public weatherOfCities:Array<Weather>;
	public errorMessage: string;
	constructor(private weatherService: WeatherService) {
		this.city = "";
		this.weatherOfCities = [];
	}

	addCity(city:string, event) {
		if(event.keyCode == 13) {
			this.weatherService.getWeather(city)
				.subscribe(weather => {
					if(weather) {
						this.weatherOfCities.push(weather);
						this.errorMessage = undefined;
					} else {
						var cityWithoutWeather = city;
						this.errorMessage = "* There is no weather data " + cityWithoutWeather;
					}
					this.city = "";
				}, error => {
					this.city = "";
					this.errorMessage = error;
				});
		}
	}
}
