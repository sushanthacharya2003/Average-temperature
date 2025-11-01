const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 },
];

function calculateAverage(pressureThreshold) {
  // 1️⃣ Filter cities by pressure >= threshold
  const filteredCities = weather.filter(
    (city) => city.pressure >= pressureThreshold
  );

  // 2️⃣ Map to extract temperatures
  const temperatures = filteredCities.map((city) => city.temperature);

  // 3️⃣ Reduce to get total temperature
  const totalTemperature = temperatures.reduce((acc, curr) => acc + curr, 0);

  // 4️⃣ Calculate average (handle divide-by-zero safety)
  const averageTemperature = totalTemperature / (temperatures.length || 1);

  // 5️⃣ Return value rounded to one decimal place
  return averageTemperature.toFixed(1);
}

const pressureThreshold = 1015;
console.log(calculateAverage(pressureThreshold)); // Output: 68.3
