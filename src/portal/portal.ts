import Layout from '../layouts/base'
class Portal {
  name: string
  layout: Layout

  constructor(props) {
    this.name = props.name
    this.layout = props.layout
  }

  render() {
    return this.layout.render()
  }

  displayToKintonePortal() {
    // @ts-ignore
    kintone.events.on("portal.show", event => {
      // @ts-ignore
      const container = kintone.portal.getContentSpaceElement();
      container.append(this.render());

      // (document.getElementsByClassName('ocean-portal-body')[0] as HTMLElement).style.display = 'none'
    });
  }
}

export default Portal;