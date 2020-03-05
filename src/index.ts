import TabsLayout from "./layouts/tabs";
import IframeWidget from "./widgets/iframe";
import DefaultPortal from './widgets/defaultPortal'
import Portal from './portal/portal';
import WeatherWidget from "./widgets/weather";

const portal = new Portal({
  name: 'test-portal',
  layout: new TabsLayout({
    tabList: [
      {
        tabName: 'Default Portal',
        tabContent: new DefaultPortal()
      },
      {
        tabName: 'Company Location',
        tabContent: new IframeWidget({
          url: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyC6NGlXCyiz7CbeJAb1RA6bUsWN6YWaK8Q&q=Centre+Point+Tower',
          width: '100%',
          height: '600px'
        })
      },
      {
        tabName: 'My Schedule',
        tabContent: new IframeWidget({
          url: 'https://nhat-nguyen.kintone-dev.com/g/schedule/index.csp?&gid=login',
          width: '100%',
          height: '600px'
        })
      },
      // {
      //   tabName: 'Today Weather',
      //   tabContent: new WeatherWidget({
      //     apiKey: '39cc4162a818aa4c9ab588df249989ea'
      //   })
      // }
    ]
  })
})

portal.displayToKintonePortal();