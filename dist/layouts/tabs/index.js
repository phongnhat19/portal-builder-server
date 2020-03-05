"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@kintone/kintone-ui-component/esm/js");
const layoutTabsError_1 = require("./layoutTabsError");
const base_1 = require("../../widgets/base");
const base_2 = require("../base");
class TabsLayout extends base_2.default {
    constructor(props) {
        super();
        this.tabList = [];
        if (!props.tabList)
            throw new Error(layoutTabsError_1.TAB_LIST_MISSING);
        if (!Array.isArray(props.tabList))
            throw new Error(layoutTabsError_1.TAB_LIST_NOT_ARRAY);
        if (props.tabList.length < 1)
            throw new Error(layoutTabsError_1.TAB_LIST_EMPTY);
        this.tabList = props.tabList;
        let items = [];
        this.tabList.forEach((tabData) => {
            if (!tabData.tabContent || typeof tabData.tabContent === 'string') {
                items.push(tabData);
                return;
            }
            if (tabData.tabContent instanceof base_1.default) {
                items.push({
                    tabName: tabData.tabName,
                    tabContent: tabData.tabContent.render()
                });
                return;
            }
        });
        this.tab = new js_1.Tabs({ items });
        this.element = this.tab.render();
    }
    addTab(tab) {
        this.tab.addItem(tab);
        return this;
    }
    removeTab(tabIndex) {
        this.tab.removeItem(tabIndex);
        return this;
    }
}
exports.default = TabsLayout;
