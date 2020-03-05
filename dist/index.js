"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabs_1 = require("./layouts/tabs");
const iframe_1 = require("./widgets/iframe");
const portal_1 = require("./portal/portal");
const portal = new portal_1.default({
    name: 'test-portal',
    layout: new tabs_1.default({
        tabList: [
            {
                tabName: 'Tab 1',
                tabContent: 'Tab 1 content'
            },
            {
                tabName: 'Company Location',
                tabContent: new iframe_1.default({
                    url: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyC6NGlXCyiz7CbeJAb1RA6bUsWN6YWaK8Q&q=Centre+Point+Tower',
                    width: 800,
                    height: 600
                })
            }
        ]
    })
});
portal.displayToKintonePortal();
