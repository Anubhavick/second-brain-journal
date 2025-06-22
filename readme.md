 ***AI-Powered Second Brain Journal***

---

```markdown
# 🧠 Second Brain Journal — AI-Powered Journaling App

A personal journal that helps you think, reflect, and grow — powered by OpenAI and voice input. Built with MERN stack and React + Vite, this app helps users **write, summarize, and track** their thoughts using smart tools and beautiful charts.

---

## ✨ Features

- 📝 **Write Journal Entries** with optional voice input
- 🔊 **Voice-to-Text** using browser speech recognition
- 🧠 **Summarize Notes with OpenAI**
- 📊 **Track Moods and Trends** using interactive charts
- 🗂️ **Search & Filter Journal Entries** by tag, date, mood
- 📱 PWA-Ready (Future scope: Android-friendly interface)
- 🔐 Local-first or auth-ready setup

---

## 🔧 Tech Stack

### 🌐 Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Chart.js + react-chartjs-2](https://www.chartjs.org/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Speech Recognition](https://www.npmjs.com/package/react-speech-recognition)
- Axios (API calls)

### ⚙️ Backend
- Node.js + Express
- MongoDB + Mongoose
- OpenAI API (for AI summaries)
- dotenv + CORS
---

---
## ⚙️ Setup Instructions

### 🔹 Prerequisites
- Node.js and npm installed
- MongoDB URI (local or Atlas)
- OpenAI API Key (from https://platform.openai.com/)

---

### 🔹 1. Clone the Repo

```bash
git clone https://github.com/your-username/second-brain-journal.git
cd second-brain-journal
```

---

### 🔹 2. Setup Backend (Server)

```bash
cd server
npm install
# Add .env file
touch .env
```

**`.env` contents:**

```
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

```bash
npm run dev
```

---

### 🔹 3. Setup Frontend (Client)

```bash
cd client
npm install
npm run dev
```

Open your browser at: `http://localhost:5173`

---

## 📦 Installed Dependencies

### Frontend

```json
"dependencies": {
  "react": "^19.x",
  "react-dom": "^19.x",
  "vite": "^5.x",
  "axios": "^1.10.0",
  "react-router-dom": "^7.6.2",
  "tailwindcss": "^4.1.10",
  "chart.js": "^4.5.0",
  "react-chartjs-2": "^5.3.0",
  "react-hot-toast": "^2.5.2",
  "classnames": "^2.5.1",
  "react-speech-recognition": "^4.0.1"
}
```

### Backend

```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^7.6.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "openai": "^4.38.0"
}
```

---

## 🚀 Future Ideas (Optional Enhancements)

* [ ] User authentication (JWT)
* [ ] Mood prediction using sentiment analysis
* [ ] Mobile app (React Native or Android)
* [ ] Sync with Google Calendar / Reminders
* [ ] Backup/export to Notion/Markdown

---

## 🧠 Why This Project?

> This journal isn't just a diary — it's a second brain.
> It helps you capture your thoughts, summarize them intelligently, and track how you grow over time.

---

## 📃 License

MIT License

---

## 👨‍💻 Made with ❤️ by \[Anubhav Mishra]

```

