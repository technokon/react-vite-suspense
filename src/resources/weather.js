export const getWeatherForCurrentLocation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        city: "Toronto",
        temp: "+24 Celscius",
        text: "Great weather today for boating",
      });
    }, 1000);
  });
};
