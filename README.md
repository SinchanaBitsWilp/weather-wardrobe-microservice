# Weather & Wardrobe Aggregator Microservice

**Academic Submission**
* **Student Name:** Shetty Sinchana Raghuram
* **Student ID:** 2023LM70047
* **Subject:** Scalable Services
* **Subject Code:** S1-25_SEMTZG527

---

## Project Overview
A stateless Node.js microservice that aggregates real-time weather data to generate location-based wardrobe recommendations. This service fetches live weather metrics via the open-source Open-Meteo API, processes the temperature through custom business logic, and returns a unified JSON response. It is fully containerized using Docker to ensure environment consistency and scalability.

## 🛠️ Technology Stack
* **Language/Runtime:** JavaScript (Node.js)
* **Framework:** Express.js (REST API)
* **HTTP Client:** Axios
* **Containerization:** Docker

## File Structure
```text
weather-wardrobe-microservice/
├── Dockerfile                  # Container configuration
├── package.json                # Project dependencies
├── server.js                   # Main application entry point & routing
├── utils/
│   └── wardrobeAdvisor.js      # Decoupled business logic for recommendations
└── README.md                   # Project documentation
