# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ALFIYA KHATIB

*INTERN ID*: CT06DG2534

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6WEEKS

*MENTOR*: NEELA SANTOSH

This project is a Chrome Extension integrated with a Node.js-based backend server designed to track user time spent on websites and provide detailed productivity analytics. It serves as a personal productivity tool for users who want to monitor their browsing habits, categorize websites into productive or unproductive types, and gain insights into how they spend their time online.

The core functionality of the extension revolves around capturing the website domain, time spent, and the timestamp. The collected data is then sent to a backend server running locally on Node.js (port 5000) via fetch requests. The backend receives this data using an Express.js server and stores it in a local data.json file, eliminating the need for a full-fledged database like MongoDB. This makes the project lightweight and easy to deploy or test in a local environment.

To make the backend accessible to the Chrome Extension, CORS (Cross-Origin Resource Sharing) is enabled using the cors middleware. The server reads and appends data to data.json using Node.js's built-in fs (File System) module. The express server is configured to handle JSON data and log every incoming request for transparency during development.

On the frontend, the extension includes a popup UI, which acts as an interface between the user and the backend server. This popup.js file contains JavaScript code that triggers the fetch call and sends the website usage data. The manifest file (manifest.json) defines permissions like tabs and access to http://localhost:5000, which are essential for making API calls from the extension to the backend.

The extension is developed using React.js (create-react-app) for the analytics dashboard (client side). The dashboard visually represents user activity, showcasing time spent on various websites and categorizing them as productive (e.g., coding platforms, learning websites) or unproductive (e.g., social media, streaming sites). This classification is either hardcoded or can be enhanced with a logic layer in the backend to dynamically categorize websites based on their domain name.

Running the system involves:

Starting the backend with node server.js or nodemon server.js.

Running the frontend using npm start in the client folder (usually hosted at localhost:3000).

Loading the extension in Chrome via chrome://extensions, enabling Developer Mode, and selecting the root folder with manifest.json.

The combination of frontend (React.js), backend (Node.js, Express), and Chrome extension APIs provides a full-stack experience. The system encourages good time management by informing users where their time is going, allowing them to self-correct.

This project showcases skills in JavaScript, Chrome Extension development, REST API integration, file handling, CORS, and local backend storage, and serves as a practical solution for anyone wanting to boost personal productivity.

