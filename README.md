Real Estate Chatbot

A simple chatbot app to help users find real estate properties based on location and budget using OpenAI function calling, built with ReactJS (Tailwind CSS) frontend and Node.js (Express) backend.


Features
Chat interface where users can ask real estate queries (e.g., "Show properties in Gurugram under 50 lakhs").
Backend API handles chat requests and returns filtered property results or general GPT answers.
Uses OpenAI’s function calling feature to filter properties by location and max price.
Hardcoded property data (5 properties) stored in the backend.
Logs all user queries and chatbot responses to a logs.json file.
Minimal, responsive UI using ReactJS + Tailwind CSS.
Easily extendable with automation workflows using n8n.
How It Works
The frontend sends user messages to the backend API.
The backend sends these messages to OpenAI’s chat completion API, including a function call definition to filter properties.
If OpenAI decides the user query needs filtering, it calls the filterProperties function with location and maxPrice.
The backend filters the hardcoded properties and returns a formatted list of matching properties.
If no filtering is needed, the backend returns the general GPT-generated response.
All conversations are logged into logs.json for record-keeping and analysis.
Tech Stack
Frontend: ReactJS + Tailwind CSS
Backend: Node.js + Express.js
OpenAI API (ChatGPT with Function Calling)
Local JSON for property data and logging
Deployment: Can be deployed on Render or run locally
Setup Instructions
Prerequisites
Node.js (v16+ recommended)
npm or yarn
OpenAI API key
Backend
Clone the repo and navigate to the backend folder.
Install dependencies:
npm install
Create a .env file in the backend root and add your OpenAI API key:
OPENAI_API_KEY=your_openai_api_key_here
Start the backend server:
npm start
The backend will run on http://localhost:5000.
Frontend
Navigate to the frontend folder.
Install dependencies:
npm install
Start the React app:
npm start
The frontend will run on http://localhost:3000.
API Endpoints
POST /api/chat
Receives user chat messages, interacts with OpenAI, and returns chatbot responses including filtered property results.
GET /api/properties
Returns a hardcoded list of 5 properties (used internally).
Properties Data
The backend includes 5 hardcoded properties in data/properties.json, each with:
location (string)
price (number, in Indian Rupees)
size (string)
type (string)
Logging
All user queries and chatbot responses are logged to logs.json for analysis and debugging.
Extending with n8n Automation
This chatbot backend can be extended with n8n, a no-code workflow automation tool, to automate tasks such as:
Triggering email or SMS alerts when users find interesting properties.
Logging conversations to external databases or spreadsheets.
Integrating with CRM systems to automatically create or update leads.
Sending follow-up messages or notifications across channels.
You can create an HTTP webhook in n8n that listens for chat events, then calls the chatbot backend API and processes responses to trigger additional workflows—streamlining your real estate business process without coding complex integrations.