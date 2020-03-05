import Widget from "../base";

class DefaultPortal extends Widget {
  constructor() {
    super();
    this.name = 'DefaultPortal'

    this.element = document.createElement('div')
    this.element.style.display = 'flex';
    this.element.style.backgroundColor = '#D4D7D7';
    // @ts-ignore
    kintone.events.on("portal.show", (_) => {
      const defaultPortal = document.getElementsByClassName('ocean-portal-body')[0] as HTMLDivElement
      // defaultPortal.remove();
      this.element.appendChild(defaultPortal)
    });
  }
}

export default DefaultPortal