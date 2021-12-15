type TWeather = {
    coord: {
        lon: number
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: string,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: string
    },
    visibility: number,
    wind: {
        speed: string,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}
export {TWeather};
