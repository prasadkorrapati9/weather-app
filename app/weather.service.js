"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var observable_1 = require('rxjs/observable');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
        this.weatherApiURL = "http://api.openweathermap.org/data/2.5/weather?appid=0e62a0276d1994560dd1848259071122";
    }
    WeatherService.prototype.getWeatherUrl = function (city) {
        return this.weatherApiURL + "&q=" + city;
    };
    WeatherService.prototype.getWeather = function (city) {
        var _this = this;
        return new observable_1.Observable(function (observable) {
            _this._http.get(_this.getWeatherUrl(city))
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                if (res.cod == "404") {
                    observable.error(res.message);
                }
                else {
                    var weather = res.weather[0];
                    weather.city = city;
                    observable.next(weather);
                }
            });
        });
    };
    WeatherService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map