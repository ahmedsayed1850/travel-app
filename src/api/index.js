import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  // the type props is to pass argument via List file to change from resturant to Hotel and attractions

  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        // sw mean south west, ne mean north east this are the place to pass longitude and latitude of the place when
        // their vaalue changes from the map file

        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          "x-rapidapi-key":
            "5ea4e851bemshad346fbf89729b1p1c104ajsn0b5b1e5ebd97",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  // this is simple fetch api using axios library you must install all dependenieces using "npm install"  lat and lng is longitude and latitude of the place when
  // their vaalue changes from the map file
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        "https://community-open-weather-map.p.rapidapi.com/find",
        {
          params: { lat, lon: lng },
          headers: {
            "x-rapidapi-key":
              "5ea4e851bemshad346fbf89729b1p1c104ajsn0b5b1e5ebd97",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
