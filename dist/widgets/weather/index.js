"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const error_1 = require("./error");
class WeatherWidget extends base_1.default {
    constructor(props) {
        super();
        if (!props.apiKey)
            throw new Error(error_1.API_KEY_MISSING);
        this.apiKey = props.apiKey;
    }
}
exports.default = WeatherWidget;
