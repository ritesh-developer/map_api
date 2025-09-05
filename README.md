# Leaflet Map Project

This project is a Node.js web application that displays an interactive map using Leaflet and OpenStreetMap. Users can click on the map to pin a location, fetch its address using reverse geocoding, and save it. Only one user pin is shown at a time, and it is not displayed after a page reload.

## Features
- Interactive map with Leaflet and OpenStreetMap
- Reverse geocoding to fetch address from coordinates
- Only one user pin at a time (previous pin is removed on new click)
- User pin is not shown after page reload (only permanent locations are displayed)
- Backend replaces previous user pin instead of appending

## Requirements
- Node.js (v14 or higher recommended)
- npm (Node package manager)

## Installation
1. Clone the repository or download the project files.
2. Open a terminal in the project directory.
3. Install dependencies:
   ```
   npm install
   ```

## Running the Project
1. Start the server:
   ```
   npm start
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project Structure
- `server.js` - Express backend server
- `public/index.html` - Main frontend file with map and logic
- `data.json` - Stores permanent and user-pinned locations
- `.gitignore` - Files and folders ignored by git

## Notes
- The app uses the free OpenStreetMap Nominatim API for reverse geocoding.
- Only permanent locations are shown after a page reload; user pins are not persistent.
- Make sure your `index.html` is inside the `public` folder for the server to serve it correctly.

