
# Weather App

A simple and interactive weather app that allows users to fetch weather information for any location. Built using the **Visual Crossing Weather API** and vanilla JavaScript, this app provides current weather details including conditions, temperature, humidity, and wind speed.

---

## Features

* **Search by Location**: Allows users to input a location (city, country, etc.) and get the weather details.
* **Weather Information**: Displays key weather metrics, including:

  * Temperature (°C)
  * Weather conditions (clear, cloudy, etc.)
  * Humidity (%)
  * Wind speed (km/h)
* **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---



## Technologies Used

* **HTML5**: Used to structure the content.
* **CSS3**: For styling the user interface with a modern, responsive design.
* **JavaScript (ES6)**: Handles fetching weather data and user interactions.
* **Visual Crossing Weather API**: Provides the weather data for the app.

---

## Getting Started

### Prerequisites

* **Node.js** and **npm** (Node Package Manager) must be installed on your machine.

### Steps to Run the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/txbish/weather-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-app
   ```

3. **Install dependencies (if any):**

   If you're using any build tools like Webpack or Parcel, install dependencies using npm (or yarn):

   ```bash
   npm install
   ```

4. **Start the development server:**

   You can run the app with a simple development server (for example, using Parcel):

   ```bash
   npm start
   ```

   This should start the server, and you can open the app in your browser at `http://localhost:1234`.

---

## Usage

1. Enter a **location** (e.g., "New York" or "London") in the input field.
2. Press the **Fetch** button.
3. Wait for the weather data to load. The app will display the following information:

   * **Location** (e.g., "New York, NY, USA")
   * **Weather conditions** (e.g., "Clear", "Partly cloudy")
   * **Temperature** in Celsius (°C)
   * **Humidity** percentage (%)
   * **Wind speed** in kilometers per hour (km/h)
4. If no location is entered or the weather data cannot be fetched, the app will display an error message.

---

## Example Output

When a user enters "New York" and presses "Fetch", the weather info will be displayed like this:

```
Location: New York, NY, USA
Conditions: Clear
Temperature: 23°C
Humidity: 60%
Wind: 15 km/h
```

---

## Project Structure

```plaintext
weather-app/
│
├── index.html          # Main HTML file
├── styles.css          # Styles for the app
├── index.js            # JavaScript logic to fetch and display weather
├── package.json        # Project dependencies and scripts (if applicable)
└── README.md           # This file
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

* [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) for providing the weather data.
* [Parcel](https://parceljs.org/) for easy bundling and serving of the app.
* [Font Awesome](https://fontawesome.com/) (if you decide to include icons later) for icons and other resources.

---

