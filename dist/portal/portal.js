"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Portal {
    constructor(props) {
        this.name = props.name;
        this.layout = props.layout;
    }
    render() {
        return this.layout.render();
    }
    displayToKintonePortal() {
        // @ts-ignore
        kintone.events.on("portal.show", event => {
            // @ts-ignore
            const container = kintone.portal.getContentSpaceElement();
            container.append(this.render());
        });
    }
}
exports.default = Portal;
