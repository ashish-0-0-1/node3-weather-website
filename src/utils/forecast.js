const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4b948336fa32f7aca818d2e1a7b1dfcd&query='+ latitude + ',' + longitude


    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current);
            callback(undefined, body.current.temperature + ' degress out. There is a ' + body.current.observation_time + ' its current time' +'  the current wind speed is'+ body.current.wind_speed)
        }
    })
}

module.exports = forecast