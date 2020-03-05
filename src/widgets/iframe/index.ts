import Widget from "../base"
import { URL_MISSING } from "./error"

type IframeWidgetProps = {
  url: string
  width?: string | number
  height?: string | number
}

class IframeWidget extends Widget {
  private url: string
  private width: string | number = 600
  private height: string | number = 450
  element: HTMLIFrameElement = document.createElement('iframe')
  constructor(props: IframeWidgetProps) {
    super();

    if (!props.url) throw new Error(URL_MISSING)

    // if (props.width && typeof props.width !== 'number') throw new Error(WIDTH_NUMBER)
    // if (props.height && typeof props.height !== 'number') throw new Error(HEIGHT_NUMBER)

    this.name = 'IframeWidget';
    this.url = props.url

    if (props.width) this.width = props.width
    if (props.height) this.height = props.height

    this.element.src = this.url
    // this.element.width = `${this.width}`
    // this.element.height = `${this.height}`
    this.element.style.width = `${this.width}`
    this.element.style.height = `${this.height}`
  }

  setURL(url: string): IframeWidget {
    this.url = url
    this.element.src = this.url
    return this
  }

  getURL(): string {
    return this.url
  }

  setWidth(width: number): IframeWidget {
    this.width = width
    this.element.width = `${this.width}`
    return this
  }

  getWidth(): string | number {
    return this.width
  }

  setHeight(height: number): IframeWidget {
    this.height = height
    this.element.height = `${height}`
    return this
  }

  getHeight(): string | number {
    return this.height
  }
}

export default IframeWidget