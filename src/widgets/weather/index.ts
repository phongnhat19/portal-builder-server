import Widget from "../base"
import {API_KEY_MISSING} from './error'
import axios from 'axios'

type WeatherWidgetProps = {
  apiKey: string
}

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

class WeatherWidget extends Widget {
  private apiKey: string

  tempDiv: HTMLDivElement
  humidityDiv: HTMLDivElement

  constructor(props: WeatherWidgetProps) {
    super()

    if (!props.apiKey) throw new Error(API_KEY_MISSING)
    this.apiKey = props.apiKey

    this.element = document.createElement('div')
    this.element.style.display = 'flex'

    this.tempDiv = document.createElement('div');
    this.element.appendChild(this.tempDiv)

    this.humidityDiv = document.createElement('div')
    this.element.appendChild(this.humidityDiv)

    this.fetchWeatherData()
      .then((weatherData: any) => {
        console.log(weatherData)

        this.tempDiv.innerHTML = `${weatherData.main.temp} C`
      })
  }

  fetchWeatherData() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const response = await axios.get(API_URL, {
            params: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              appid: this.apiKey,
              units: "metric"
            }
          })
          resolve(response.data)
        } catch (error) {
          reject(error)
        }
      });
    });
  }
  
}

export default WeatherWidget