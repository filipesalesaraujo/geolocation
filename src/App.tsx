import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ip, setIP] = useState("");
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
      {ip !== null ? <p>IPv4: {ip}</p> : ""}
      {countryName !== null ? <p>País: {countryName}</p> : ""}
      {state !== null ? <p>Estado: {state}</p> : ""}
      {city !== null ? <p>Cidade: {city}</p> : ""}
      {postal !== null ? <p>Postal: {postal}</p> : ""}
      {latitude !== null ? <p>Latitude: {latitude}</p> : ""}
      {longitude !== null ? <p>Longitude: {longitude}</p> : ""}
    </>
  );
}
export default App;
