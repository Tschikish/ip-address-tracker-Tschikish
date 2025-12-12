import { useState } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import InfoCard, { type InfoCardProps } from "./components/InfoCard";
import buttonArrow from "./assets/icon-arrow.svg";
import { STATE_NAME_TO_CODE } from "./constants/RegionCodes.ts";

//const API_KEY = "at_k24wjUCIpU1D36mSvgQa7wXYVxDYG";
const form_placeholder = "Search for any IP address or domain";
const first_location: [number, number] = [
  43.731542329234905, 7.415013322058932,
];
const apiKey = import.meta.env.GEO_IPIFY_API_KEY;

function App() {
  const [LatLng, SetLatLng] = useState<[number, number]>(first_location);

  //Nedovrseno
  const [info, setInfo] = useState<InfoCardProps | null>(null);

  const formInput = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const input = document.getElementById("form-input") as HTMLInputElement;
    if (!input?.value) return;

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input.value}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();

      const lat = result.location.lat;
      const lng = result.location.lng;
      SetLatLng([lat, lng]);

      setInfo({
        ip: result.ip ?? "",
        city: result.location.city ?? "",
        postalCode: result.location.postalCode ?? "",
        regionCode:
          STATE_NAME_TO_CODE[
            result.location.region as keyof typeof STATE_NAME_TO_CODE
          ] ?? result.location.region,
        UfcOffset: result.location.timezone,
        ISP: result.isp,
      } as InfoCardProps);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <header className="hero">
        <h1>IP Address Tracker</h1>
        <form>
          <input type="text" placeholder={form_placeholder} id="form-input" />
          <button onClick={formInput} className="test">
            <img src={buttonArrow} alt="search" />
          </button>
          <h6>Number of remaining requests: </h6>
        </form>

        {info ? <InfoCard data={info} /> : <InfoCard data={null} />}
      </header>

      <Map center={LatLng} />
    </>
  );
}

export default App;
