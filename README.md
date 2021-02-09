# The Weather Now

TWN is a web app that shows you current weather data based on your location (city and state). There is also the option to search places for their current weather. User can save a list of favorite places to referance them later. Made with Express and EJS.
* https://nickfasulo-weathernow.herokuapp.com/

## Dependencies

```javascript
"dependencies": {
  "bcryptjs": "^2.4.3",
  "connect-flash": "^0.1.1",
  "connect-mongo": "^3.2.0",
  "cookie-parser": "~1.4.4",
  "debug": "~2.6.9",
  "dotenv": "^8.2.0",
  "ejs": "~2.6.1",
  "express": "~4.16.1",
  "express-session": "^1.17.0",
  "faker": "^4.1.0",
  "http-errors": "~1.6.3",
  "method-override": "^3.0.0",
  "mongoose": "^5.9.3",
  "morgan": "~1.9.1",
  "node-fetch": "^2.6.0",
  "passport": "^0.4.1",
  "passport-local": "^1.0.0"
}
```

## Routes

### Parent:

```javascript
'/api/users'
'/api/weather'
'/api/favorites'
```

### Children:

### /users

#### GET:

```javascript
'/register'
'/login'
'/logout'
'/fail'
'/unauth'
'/profile'
'/update-profile'
```

#### POST:

```javascript
'/register'
'/login'
```

#### PUT:

```javascript
'/update-profile'
'/update-password'
```

### /weather

#### GET:

```javascript
'/'
'/:city/:state'
```

#### POST:

```javascript
'/search'
```

### /favorites

#### GET:

```javascript
'/'
```

#### POST:

```javascript
'/'
```

## Built With

* [Express](https://expressjs.com/) - Framework used.
* [NPM](https://www.npmjs.com/) - Dependency management.
* [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/) - Used to generate map.
* [Weatherbit.io](https://www.weatherbit.io/api/weather-current) - Current weather API.

## Author

* [NickFasulo](https://github.com/NickFasulo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
