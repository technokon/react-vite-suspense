import { createResource } from "../resources/createResource";
import { getWeatherForCurrentLocation } from "../resources/weather";

const resource = createResource(getWeatherForCurrentLocation());
console.log("running");
export const Weather = () => {
  console.log("rendering weather");

  const { city, temp, text } = resource.read();

  return (
    <>
      <h2>And for the weather in {city}</h2>
      <div>Temperature outside is {temp}</div>
      <div>{text}</div>
    </>
  );
};
