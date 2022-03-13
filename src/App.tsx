import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ip, setIP] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [state, setState] = useState("");

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    setCountryName(res.data.country_name);
    setCity(res.data.city);
    setPostal(res.data.postal);
    setLatitude(res.data.latitude);
    setLongitude(res.data.longitude);
    setState(res.data.state);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Seu endereço IP é:</h1>
      <p>IPv4: {ip}</p>
      <p>País: {countryName}</p>
      <p>Cidade: {city}</p>
      <p>Postal: {postal}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Estado: {state}</p>
    </>
  );
}
export default App;
