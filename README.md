<h1 align="center">Travel Advisor App <a href="https://travel-app-one.vercel.app/">Live Demo</a></h1>


### Project Preview

![](https://i.ibb.co/0cFqQTQ/localhost-3000-1.jpg)

### Info

to start this project `git clone [this-git-repo]`
install all dependiencies by `npm i`
to start this project `npm start`
if you want to run it for production `npm run build`
change API keys with your own this for test only not built for production cases

### Project

Travel Application using Google Maps. With Geolocation, Google Maps
API, Fetching restaurants, hotels, and attractions based on the location
from specialized Rapid APIs, data filtering, and much more
Advanced React Concepts, Ref Creating user interface using MUI
Fetching Multiple libraries from RapidAPI
 __[Travel Advisor App](https://travel-app-one.vercel.app/)
 
 ### Ract Google Maps
 react-google-maps provides "a set of React components wrapping the underlying Google Maps JavaScript API v3 instances". It is well documented and provides many examples: it shows code to display a single info window and toggle open/close within a HOC. Extrapolating this to multiple markers ends up open and closing all of them at once. In this project I wanted to open the InfoBoxes individually and also have hold the information of the active location within a parent component. To solve this active states were stored in App.js and an event handler was passed down to the map component. My solution can be found at:

My StackOverflow Answer to solve single InfoWindow display toggle

### Folder Structure

- Home
   - [README.md](README.md)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __public__
     - [favicon.ico](public/favicon.ico)
     - [index.html](public/index.html)
     - [logo192.png](public/logo192.png)
     - [logo512.png](public/logo512.png)
     - [manifest.json](public/manifest.json)
     - [robots.txt](public/robots.txt)
   - __src__
     - [App.css](src/App.css)
     - [App.js](src/App.js)
     - [App.test.js](src/App.test.js)
     - __api__
       - [index.js](src/api/index.js)
     - __components__
       - __List__
         - [List.js](src/components/List/List.js)
         - [styles.js](src/components/List/styles.js)
       - __Map__
         - [Map.js](src/components/Map/Map.js)
         - [mapStyles.js](src/components/Map/mapStyles.js)
         - [styles.js](src/components/Map/styles.js)
       - __Nav__
         - [Nav.js](src/components/Nav/Nav.js)
         - [styles.js](src/components/Nav/styles.js)
       - __PlaceDetails__
         - [PlaceDetails.js](src/components/PlaceDetails/PlaceDetails.js)
         - [styles.js](src/components/PlaceDetails/styles.js)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - [logo.svg](src/logo.svg)
     - [reportWebVitals.js](src/reportWebVitals.js)
     - [setupTests.js](src/setupTests.js)

