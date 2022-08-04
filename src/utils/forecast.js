const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4b948336fa32f7aca818d2e1a7b1dfcd&query='+ latitude + ',' + longitude


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.temperature + ' degress out. There is a ' + body.current.observation_time + 'its current time' +body.weather_descriptions.wind_speed+ 'is the wind speed right now and'+'the location comes under the country of'+body.location.country)
        }
    })
}

module.exports = forecast