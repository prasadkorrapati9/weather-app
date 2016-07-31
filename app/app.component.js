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
var weather_service_1 = require('./weather.service');
var AppComponent = (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.city = "";
        this.weatherOfCities = [];
    }
    AppComponent.prototype.addCity = function (city, event) {
        var _this = this;
        if (event.keyCode == 13) {
            this.weatherService.getWeather(city)
                .subscribe(function (weather) {
                if (weather) {
                    _this.weatherOfCities.push(weather);
                    _this.errorMessage = undefined;
                }
                else {
                    var cityWithoutWeather = city;
                    _this.errorMessage = "* There is no weather data " + cityWithoutWeather;
                }
                _this.city = "";
            }, function (error) {
                _this.city = "";
                _this.errorMessage = error;
            });
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<header>\n  \t\t<h1>Weather App</h1>\n  \t</header>\n  \t<div class=\"content\">\n  \t\t<input type=\"text\" [(ngModel)]=\"city\" (keyup)=\"addCity(city, $event)\" placeholder=\"Search weather for your city\">\n  \t\t<p *ngIf=\"errorMessage\" class=\"error-message\">{{errorMessage}}</p>\n\t\t<ul *ngFor=\"let weather of weatherOfCities\" class=\"weather-card\">\n\t\t\t<li>\n\t\t\t\t<h2>{{weather.city}}</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Weather Type: {{weather.main}}</li>\n\t\t\t\t\t<li>Description: {{weather.description}}</li>\n\t\t\t\t</ul>\n\n\t\t\t</li>\n\t\t</ul>\n  \t</div>\n  \t\n  ",
            styles: ["\n  \theader h1 {\n  \t\tpadding: 10px;\n  \t\tbackground: #5F9EA0;\n  \t\tcolor: #f5f5f5;\n  \t\ttext-shadow: 1px 1px 4px #808080;\n  \t}\n\n  \t.content {\n  \t\tpadding: 10x;\n  \t}\n\n  \tinput {\n  \t\tfont-size: 16px;\n  \t}\n\n  \t.weather-card {\n  \t\tborder-bottom: 1px solid #d3d3d3;\n  \t\tpadding-bottom: 10px;\n  \t}\n\n  \t.error-message {\n  \t\tcolor: red;\n  \t\tfont-size: 8px;\n  \t}\n  "],
            providers: [weather_service_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weather_service_1.WeatherService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map