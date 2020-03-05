"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../base");
const error_1 = require("./error");
class IframeWidget extends base_1.default {
    constructor(props) {
        super();
        this.width = 600;
        this.height = 450;
        this.element = document.createElement('iframe');
        if (!props.url)
            throw new Error(error_1.URL_MISSING);
        if (props.width && typeof props.width !== 'number')
            throw new Error(error_1.WIDTH_NUMBER);
        if (props.height && typeof props.height !== 'number')
            throw new Error(error_1.HEIGHT_NUMBER);
        this.name = 'IframeWidget';
        this.url = props.url;
        if (props.width)
            this.width = props.width;
        if (props.height)
            this.height = props.height;
        this.element.src = this.url;
        this.element.width = `${this.width}`;
        this.element.height = `${this.height}`;
    }
    setURL(url) {
        this.url = url;
        this.element.src = this.url;
        return this;
    }
    getURL() {
        return this.url;
    }
    setWidth(width) {
        this.width = width;
        this.element.width = `${this.width}`;
        return this;
    }
    getWidth() {
        return this.width;
    }
    setHeight(height) {
        this.height = height;
        this.element.height = `${height}`;
        return this;
    }
    getHeight() {
        return this.height;
    }
}
exports.default = IframeWidget;
