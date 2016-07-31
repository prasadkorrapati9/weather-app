"use strict";
var Weather = (function () {
    function Weather(id, city, main, description) {
        this.id = id;
        this.city = city;
        this.main = main;
        this.description = description;
    }
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=weather.js.map