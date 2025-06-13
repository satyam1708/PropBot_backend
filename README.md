# 🏠 PropBot – Real Estate Chatbot Powered by Generative AI

A full-stack web application where users can ask real estate-related queries like “Show apartments in Gurugram under 50 lakhs” and get intelligent, filtered responses powered by OpenAI’s Function Calling.

---

## 🔗 Live Demo

- **Frontend**: [https://propbot-b5f0.onrender.com](https://propbot-b5f0.onrender.com)  
- **Backend API**: [https://propbot-backend.onrender.com](https://propbot-backend.onrender.com)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Integration**: OpenAI API (with Function Calling)
- **Automation**: JSON logging, extendable via n8n

---

## 📦 Setup Instructions

### 1. Clone the Repositories

```bash
git clone https://github.com/satyam1708/PropBot_frontend.git
git clone https://github.com/satyam1708/PropBot_backend.git
2. Backend Setup (PropBot_backend)
➤ Install dependencies
cd PropBot_backend
npm install
➤ Environment Variables
Create a .env file in the root and add your OpenAI key:
OPENAI_API_KEY=your_openai_api_key_here
➤ Start the server
node index.js
This will run the backend on http://localhost:5000 or on your chosen port.
3. Frontend Setup (PropBot_frontend)
➤ Install dependencies
cd PropBot_frontend
npm install
➤ Update the backend URL
The app uses this backend endpoint:
https://propbot-backend.onrender.com/api/chat
If you're running locally, replace it with http://localhost:5000/api/chat in App.js.
➤ Start the React app
npm start
The frontend will run on http://localhost:3000.
🧠 How It Works
✨ OpenAI Function Calling
We use OpenAI's Function Calling feature to parse user queries like:
"Show apartments in Gurugram under 50 lakhs"
When such a query is detected, the model calls the backend-defined function:
filterProperties(location, maxPrice)
This function filters a hardcoded list of 5 properties and returns matches.
🏠 Sample Data
[
  { "id": 1, "location": "Gurugram", "price": 4500000, "size": "1200 sqft", "type": "Apartment" },
  { "id": 2, "location": "Delhi", "price": 6000000, "size": "1500 sqft", "type": "Villa" },
  { "id": 3, "location": "Gurugram", "price": 3000000, "size": "900 sqft", "type": "Studio" },
  { "id": 4, "location": "Noida", "price": 5000000, "size": "1300 sqft", "type": "Apartment" },
  { "id": 5, "location": "Delhi", "price": 7000000, "size": "1800 sqft", "type": "Villa" }
]
📝 Logging
Each user query and bot response is saved to logs.json in the backend:
{
  "query": "Show properties in Delhi under 70 lakhs",
  "response": "Here are the properties in Delhi under 70 lakhs: ..."
}
This provides a simple audit trail and opens doors for analytics or training.
🔄 Automation & Extending with n8n
This app can be extended using n8n, a powerful workflow automation tool.
🔧 Ideas for Integration:
Trigger a webhook in n8n whenever a user asks a query (using logs.json or direct HTTP).
Save user queries to Google Sheets or Notion for analytics.
Send real-time alerts or summaries via Slack/Email.
Integrate with a real database in future via n8n workflows.
The modular architecture allows for easy API expansion and workflow hooks.
🧱 Project Architecture
📦 PropBot
├── backend
│   ├── index.js         # Express server
│   ├── openai.js        # OpenAI configuration and function calling logic
│   ├── data/
│   │   └── properties.json  # Hardcoded sample properties
│   └── logs.json        # Stores user queries and responses
├── frontend
│   └── App.js           # React app with Tailwind CSS UI
✅ Features
🔍 Ask AI-powered real estate queries with Function Calling
🧠 OpenAI-powered intelligent responses
📁 No database — uses sample data for simplicity
📜 Logs all interactions
💅 Clean, responsive chat UI
🚀 Deployed on Render (frontend + backend)
📬 Contact
If you're interested in the job opportunity, please reach out:
📧 Email: pandeysatyam1708@gmail.com
🌐 Portfolio: https://satyam-pandey.vercel.app
🧑‍💼 LinkedIn: https://linkedin.com/in/satyam-pandey-se
Built with ❤️ by Satyam Pandey

---

Let me know if you'd like this added directly to your GitHub repo or need help with `.env`, deployment, or n8n automation integration next.
