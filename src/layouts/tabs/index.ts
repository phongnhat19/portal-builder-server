import {Tabs} from '@kintone/kintone-ui-component/esm/js';
import {TAB_LIST_MISSING, TAB_LIST_NOT_ARRAY, TAB_LIST_EMPTY} from './layoutTabsError';
import Widget from '../../widgets/base';
import Layout from '../base'
import './style.css'

type Tab = {
  tabName: string
  tabContent?: any
}

type TabsProps = {
  tabList: Array<Tab>
}
class TabsLayout extends Layout {
  tabList: Array<Tab> = []
  tab: Tabs
  
  constructor(props: TabsProps) {
    super();
    if (!props.tabList) throw new Error(TAB_LIST_MISSING)
    if (!Array.isArray(props.tabList)) throw new Error(TAB_LIST_NOT_ARRAY)
    if (props.tabList.length < 1) throw new Error(TAB_LIST_EMPTY)

    this.tabList = props.tabList
  
    let items = [];

    this.tabList.forEach((tabData) => {
      if (!tabData.tabContent || typeof tabData.tabContent === 'string') {
        items.push(tabData);
        return
      }
      if (tabData.tabContent instanceof Widget) {
        items.push({
          tabName: tabData.tabName,
          tabContent: tabData.tabContent.render()
        })
        return
      }
    })

    this.tab = new Tabs({ items });
    this.element = this.tab.render();
  }

  addTab(tab: Tab) {
    this.tab.addItem(tab);
    return this
  }

  removeTab(tabIndex: number) {
    this.tab.removeItem(tabIndex)
    return this
  }
}

export default TabsLayout