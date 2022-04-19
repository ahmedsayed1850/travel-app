import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import mapStyles from "./mapStyles";
import useStyles from "./styles.js";
// map probs simply is the latitude and longitude of a specific place and setting it from app however I didn't use useContext because it's not deep so I've just keep it simple
const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // this google map api key to get a new one go to "https://console.cloud.google.com/home"
        // navigate to api create your app search for javascript map api and place api then create credintial then copy and paste it
        bootstrapURLKeys={{ key: "AIzaSyDB1y6e4csJ5WdfWzYrCxEfujDjeUEEsKw" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          // to get overview of what is happening here console.log(e) what this code doing is setting latitude and longitude when map changes
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // on child click does navigate you the list component when you click on child of places.map
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((place, i) => (
            // place is a string so we must convert it to string key i not best practice to notice better to use id of that properety
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {/* matches is simply mobile if not mobile then increase the size and make it more responsive */}
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {" "}
                    {place.name}
                  </Typography>
                  {/* a fall back image if there is no image for the resturant */}
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                  />
                  <Rating
                    name="read-only"
                    size="small"
                    value={Number(place.rating)}
                    readOnly
                  />
                </Paper>
              )}
            </div>
          ))}
        {/* weather data is from open weather api give you list of length if weather exist for this place then map over it and set lat and long on the map */}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                height="70px"
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
