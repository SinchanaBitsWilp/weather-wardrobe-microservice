const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { getRecommendation } = require('./utils/wardrobeAdvisor');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next();
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP', service: 'weather-wardrobe-aggregator', timestamp: new Date() });
});

app.get('/api/v1/advise', async (req, res) => {
    const lat = req.query.lat || 19.218;
    const lon = req.query.lon || 73.086;

    try {
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const response = await axios.get(weatherUrl);
        
        const currentTemp = response.data.current_weather.temperature;
        const windSpeed = response.data.current_weather.windspeed;
        const wardrobeAdvice = getRecommendation(currentTemp);

        res.status(200).json({
            service: "Weather-Wardrobe-Aggregator",
            status: "success",
            data: {
                coordinates: { latitude: parseFloat(lat), longitude: parseFloat(lon) },
                weather: { temperature_celsius: currentTemp, wind_speed_kmh: windSpeed },
                recommendation: wardrobeAdvice
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error("API Error:", error.message);
        res.status(500).json({ error: "Failed to fetch weather data." });
    }
});

app.listen(port, () => {
    console.log(`🌦️  Microservice live on port ${port}`);
});
