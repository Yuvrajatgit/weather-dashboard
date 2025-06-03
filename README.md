# Weather Dashboard 🌦️

A weather dashboard built using React, Vite, and TypeScript. This app allows users to view current weather, forecasts, and manage a list of favorite cities.

## Live Demo

Check out the live version of this project here: https://weather-dashboard-eight-sand.vercel.app/

## 🔧 Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS + ShadCN UI
- React Router
- React Query
- Recharts
- OpenWeather API

## 🚀 Features

- 🌤 Current city weather data
- 🔍 Search for any city's weather
- ❤️ Favorite cities management
- 🌗 Light/Dark theme toggle
- 📊 Forecast visualization using Recharts

## 🔍 Custom Hooks

- `useGeoLocation` – Retrieves user's location via browser
- `useWeather` – Handles fetching weather data using multiple `useQuery` hooks:
  - `useWeatherQuery`
  - `useForecastQuery`
  - `useReverseGeocodeQuery`
  - `useLocationSearch`

## 📁 Project Structure

- `config.ts`: API base URLs, keys, and default params
- `weather.ts`: Utility class with methods for API interaction
- `Skeleton.tsx`: Skeleton loaders for improved UX

## 📦 Setup & Run Locally

```bash
npm install
npm run dev

